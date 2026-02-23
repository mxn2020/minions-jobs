"""
Minions Jobs Python SDK

Canonical schemas for job postings and extracted signals across freelance platforms
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Jobs.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
