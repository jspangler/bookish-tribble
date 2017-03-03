import sys

try:
    filename = sys.argv[1]
except IndexError:
    print 'No file provided.'
    exit(1)

ages = {}
try:
    with open(filename) as f:
        content = f.readlines()

        for line in content:
            age = line.rstrip('\n').split(',')[1]
            if age not in ages.keys():
                ages[age] = 0
            ages[age] += 1

    for age in ages:
        print '{0},{1}'.format(age, ages[age])
except:
    print 'Error reading file.'
    exit(1)
