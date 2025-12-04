import time
import sys

a = ['|','/','—','\\']

# print(a[3])
while True:
    for i in range(0,4):
        # print(a[i])
        sys.stdout.write(f"\r{a[i]}")
        sys.stdout.flush()
        time.sleep(0.1)

