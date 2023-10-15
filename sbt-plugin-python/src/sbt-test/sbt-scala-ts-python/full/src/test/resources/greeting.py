# Generated by ScalaTS 0.5.17: https://scala-ts.github.io/scala-ts/

import typing  # noqa: F401
import datetime  # noqa: F401
import time  # noqa: F401

from generated import bye  # noqa: F401
from generated.bye import Bye
from generated import goodbye  # noqa: F401
from generated.goodbye import GoodBye
from generated import hello  # noqa: F401
from generated.hello import Hello
from generated import hi  # noqa: F401
from generated.hi import Hi
from generated import whatever  # noqa: F401
from generated.whatever import Whatever


# Declare union Greeting
Greeting = typing.Union[Bye, GoodBye, Hello, Hi, Whatever]


class GreetingCompanion:
    @classmethod
    def Bye(self) -> Greeting:
        return bye.ByeInhabitant

    @classmethod
    def GoodBye(self) -> Greeting:
        return goodbye.GoodByeInhabitant

    @classmethod
    def Hello(self) -> Greeting:
        return hello.HelloInhabitant

    @classmethod
    def Hi(self) -> Greeting:
        return hi.HiInhabitant


GreetingKnownValues: typing.List[Greeting] = [
    GreetingCompanion.Bye(),
    GreetingCompanion.GoodBye(),
    GreetingCompanion.Hello(),
    GreetingCompanion.Hi(),
]
