# # print('hello,world')
# name = input('you name')
# print('hello',name)

# age = 18
# if age >= 9:
#     print('teenager')
# elif age >= 18:
#     print('adult')
# else:
#     print('kid')

# birth=input('you age')
# age = int(birth)
# if age <2000:
#     print('00前')
# else:
#     print('00后')
# names = ['Michael', 'Bob', 'Tracy']
# for name in names:
#     print(name)

# sum = 'hello'
# x = ['Bart', 'Lisa', 'Adam']
# for a in x:
#     print(sum+a)

# L = ['Michael', 'Sarah', 'Tracy', 'Bob', 'Jack']
# r = []
# n = 3
# for i in range(n):
#     r.append(L[i])
#     #print(r)
#     print(L[0:4])

# L = []
# for x in range(1,11):
#     L.append(x*x)
#     print(L)

# 导入模块
# import support

# # 现在可以调用模块里包含的函数了
# support.print_func("Runoob")

# 定义函数
# def printme( str ):
#     "打印任何传入的字符串"
#     print(str);
#     return;

# # 调用函数
# printme("我要调用用户自定义函数!");
# printme(str = 'hello,world');

#可写函数说明
# def printinfo( name, age = 35 ):
#     "打印任何传入的字符串"
#     print("Name: ", name);
#     print( "Age ", age);
#     return;

# #调用printinfo函数
# printinfo( age=50, name="miki" );
# printinfo( name="miki" );

# sum = lambda arg1,arg2:arg1+arg2
# print('相加得出',sum(10,20))

# #可写函数说明
# def printinfo( name, age = 35 ):
#     "打印任何传入的字符串"
#     print("Name: ", name);
#     print( "Age ", age);
#     total = name + age
#     print(total)
#     return total;
# total = printinfo(50,150)

# from urllib import request

# with request.urlopen('https://api.douban.com/v2/book/2129650') as f:
#     data = f.read()
#     print('Status:', f.status, f.reason)
#     for k, v in f.getheaders():
#         print('%s: %s' % (k, v))
#     print('Data:', data.decode('utf-8'))
from urllib import request

req = request.Request('http://www.douban.com/')
req.add_header('User-Agent', 'Mozilla/6.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/8.0 Mobile/10A5376e Safari/8536.25')
with request.urlopen(req) as f:
    print('Status:', f.status, f.reason)
    for k, v in f.getheaders():
        print('%s: %s' % (k, v))
    print('Data:', f.read().decode('utf-8'))