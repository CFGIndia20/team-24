batches = {
    "10": [1,2,3,4],
    "20": [5,6,7,8]
}

slot_preference = {
    "1":[1,2,3],
    "2":[4,5,6],
    "3":[1,2,3],
    "4":[2,4,5],
    "5":[2,7,8],
    "6":[3,8,9],
    "7":[2,6,3],
    "8":[1,5,6]
}

def check_preference():
    for key,value in batches.items():
        student = value
        for j in student:
            for i in slot_preference[j]:
                print(i)



check_preference()