def subsets(s,curr,idx):
    if idx == len(s):
        print(curr)
        return
    subsets(s,curr,idx+1)
    subsets(s,curr+s[idx],idx+1)

def main():
    s = 'abc'
    subsets(s,'',0)

if __name__ == '__main__':
    main()