from jose import jwt, JWTError
from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
import httpx

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
CLERK_JWKS_URL = "https://modest-narwhal-32.clerk.accounts.dev/.well-known/jwks.json"
_jwks_cache = None

def get_jwks():
    global _jwks_cache
    if _jwks_cache is None:
        _jwks_cache = httpx.get(CLERK_JWKS_URL).json()
    return _jwks_cache


def decode_token(token: str) -> dict | None:
    try:
        payload = jwt.decode(
            token,
            get_jwks(),
            algorithms=["RS256"],
            options={"verify_audience": False}
        )
        return {
            "clerk_id": payload.get("sub"),
            "rol": payload.get("public_metadata", {}).get("rol", "cliente"),
            "activo": payload.get("public_metadata", {}).get("activo", True)
        }
    except JWTError:
        return None


def AUTH(token: str = Depends(oauth2_scheme)):
    data = decode_token(token)
    if not data:
        raise HTTPException(status_code=401, detail="Token inválido o expirado")
    if not data["activo"]:
        raise HTTPException(status_code=403, detail="Usuario suspendido")
    return data


def es_propietario(clerk_id: str, usuario: dict = Depends(AUTH)):
    if usuario["rol"] != "admin" and usuario["clerk_id"] != clerk_id:
        raise HTTPException(status_code=403, detail="No autorizado")
    return usuario


def es_admin(usuario: dict = Depends(AUTH)):
    if usuario["rol"] != "admin":
        raise HTTPException(status_code=403, detail="No autorizado")
    return usuario