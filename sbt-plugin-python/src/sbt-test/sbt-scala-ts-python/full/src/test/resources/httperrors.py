# Generated by ScalaTS 0.5.18-SNAPSHOT: https://scala-ts.github.io/scala-ts/

from dataclasses import dataclass  # noqa: F401
import typing  # noqa: F401
import datetime  # noqa: F401
import time  # noqa: F401


# Declare singleton HttpErrors
class HttpErrorsInvariantsFactory:
    @classmethod
    def NotFound(self) -> str:
        return "404"

    @classmethod
    def InternalServerError(self) -> str:
        return "500"


@dataclass
class IHttpErrorsInvariants:
    NotFound: str
    InternalServerError: str


HttpErrorsInvariants = IHttpErrorsInvariants(
    NotFound=HttpErrorsInvariantsFactory.NotFound(),
    InternalServerError=HttpErrorsInvariantsFactory.InternalServerError(),
)
