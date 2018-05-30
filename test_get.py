#test_get.py test for get requests
""" Import unitest and modules """
import unittest
from my_app import index

class GetTests(unittest.TestCase):
    """ Testing get requests """
    def test_get(self):
        """test for get"""
        self.assertEqual(index(), "welcome")
