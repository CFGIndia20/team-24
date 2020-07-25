batches = {
    "10": ['a','b','c','d'],
    "20": ['e','f','g','h']
}

slot_preference = {
    'a':1,
    'b':1,
    'c':2,
    'd':4,
    'e':5,
    'f':1,
    'g':3,
    'h':6
}

# 0th: no of students in the current batch, 1st: Total Number of batches
slot = {
   "1":[0,0],
    "2":[0,0],
    "3":[0,0],
    "4":[0,0],
    "5":[0,0],
    "6":[0,0],
    "7":[0,0],
    "8":[0,0]
}

def valid(key):
    if slot[key][0]<2:
        return True


def check():
    for key,value in batches.items():
        student = value
        for j in student:
            for key in slot.keys():
                if key==str(slot_preference[j]):
                    if valid(key):
                        slot[key][0] = slot[key][0]+1
                        break
                    else:
                        slot[key][0] = 1
                        slot[key][1] = slot[key][1]+1
                        break
    

        

check()
print(slot["1"][0]+1)

"""
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
                trainer[j]['time']=1
                break
            else:
                cur_slot = trainer[j]['slot'][-1]
                if (i-cur_slot) == 1 or (i-trainer[j]['time'][0])>8:
                    continue
                else:
                    trainer[j]['slot'].append(i)
                    break


def assign_substitute(slot_available, teacher_leave):
    for j in trainer:
        if j == teacher_leave:
            continue
        if trainer[j]['count']==0:
            trainer[j]['count']+=1
            trainer[j]['slot'].append(i)
            trainer[j]['time']=1
            break
        else:
            cur_slot = trainer[j]['slot'][-1]
            if (slot_available-cur_slot) == 1 or (slot_available-trainer[j]['time'][0])>8:
                continue
            else:
                trainer[j]['slot'].append(i)
                break


    


check_preference()
assign_trainer()
print(trainer)
"""