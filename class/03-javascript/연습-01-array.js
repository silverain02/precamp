let classmates = ["ö��", "����","����"]
// undefined
classmates
// (3)?['ö��', '����', '����']
classmates[0]
// 'ö��'
classmates[1]
// '����'
classmates[2]
// '����'
classmates.includes("����")
// true
classmates.includes("�ͱ�")
// false
classmates.length
// 3
classmates.push("�ͱ�")
// 4
classmates.includes("�ͱ�")
// true
classmates.pop()
// '�ͱ�'
classmates.length
// 3
classmates
// (3)?['ö��', '����', '����']