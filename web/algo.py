batches = {
    "10": ['a','b','c','d'],
    "20": ['e','f','g','h']
}

slot_preference = {
    'a':[1,2,3],
    'b':[4,5,6],
    'c':[1,2,3],
    'd':[2,4,5],
    'e':[2,7,8],
    'f':[3,8,7],
    'g':[2,6,3],
    'h':[1,5,6]
}

slot = {
    1:[],
    2:[],
    3:[],
    4:[],
    5:[],
    6:[],
    7:[],
    8:[]
}


def isValid(i):
    if len(slot[i]) <= 1:
        return True


def check_preference():
    for key,value in batches.items():
        student = value
        for j in student:
            for i in slot_preference[j]:
                if isValid(i):
                    slot[i].append(j)
                    break
    print(slot)

trainer = {
    'xyz':{'count':0, 'time':0, 'slot':[]},
    'abc':{'count':0, 'time':0, 'slot':[]},
    'cde':{'count':0, 'time':0, 'slot':[]}
    }

def assign_trainer():
    for i in slot:
        for j in trainer:
            if len([slot[i]]) == 0:
                continue
            if trainer[j]['count'] == 0:
                trainer[j]['count']+=1
                trainer[j]['slot'].append(i)


    


check_preference()
assign_trainer()
print(trainer)
