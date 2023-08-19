import requests
import time
from typing import List

def get_numbers(urls: List[str]) -> List[int]:
  """Gets the numbers from the specified URLs.

  Args:
    urls: The list of URLs to get the numbers from.

  Returns:
    A list of integers.
  """
  numbers = []
  for url in urls:
    response = requests.get(url)
    if response.status_code == 200:
      numbers.extend(response.json()['numbers'])
  return list(set(numbers))

def main():
  urls = [
    'http://20.244.56.144/numbers/primes',
    'http://20.244.56.144/numbers/fibo',
    'http://20.244.56.144/numbers/odd'
  ]

  start_time = time.time()
  numbers = get_numbers(urls)
  end_time = time.time()

  print(f'Time taken: {end_time - start_time}')
  print(numbers)

if __name__ == '__main__':
  main()
