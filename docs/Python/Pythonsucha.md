---
title: Python速查地图
date: 2022-09-12
sidebar: auto
---

## 1.变量和简单数据类型

### 1.1修改字符串大小写的方法

1. `title()`将每个单词的首写字母都改为大写
2. `upper()`将字符串改为全部都大写
3. `lower()`将字符串改为全部小写

```py
#演示代码1-1

name = "ada lovelace"

print(name.title())
print(name.upper())
print(name.lower())
```

```py
#运行结果

Ada Lovelace
ADA LOVELACE
ada lovelace
```

### 1.2使用制表符或换行符来添加空白

1. `\t `在字符串中添加制表符
2. `\n `在字符串中添加换行符

```py
#演示代码1-2

# 字符串"\n\t"
# 让Python换一行
# 并且在下一行开头添加一个制表符

print("Languages:\n\tPython\n\tc\n\tJavaScript")
```

```py
#运行结果

Languages:
     Python
     C
     JavaScript
```
### 1.3删除空白

1. `rstrip()`删除字符串末尾的空白(right)
2. `lstrip()`删除字符串开头的空白(left)
3. `strip()` 剔除字符串两边的空白

```py
#演示代码1-3

favorite_language = ' python '

print(favorite_language.rstrip())
print(favorite_language.lstrip())
print(favorite_language.strip())
```

```py
#运行结果

' python'
'python '
'python'
```

## 2.列表简介

### 2.1[]表示列表，并用逗号分隔其中的元素，索引从0而不是1开始

```py
# 演示代码2-1

bicycles = ['trek','cannondale','redline','specialized']

print(bicycles)
print(bicycles[0])
print(bicycles[0].title())
```

```py
# 运行结果

['trek','cannondale','redline','specialized']
trek
Trek
```

### 2.2修改、添加和删除元素

1. `lst.append(val)`在列表尾部添加元素

```py
# 演示代码2-2

motorcycles = ['honda','yamaha','suzuki']
motorcycles.append('ducati')  # 方法append()将元素'ducati'添加到列表末尾，而不影响列表中的其他所有元素
print(motorcycles)
```

```py
# 运行结果

['honda','yamaha','suzuki','ducati']
```

2. `lst.insert(idx,val)`在列表中的任何位置添加新元素

```py
# 演示代码2-3

motorcycles = ['honda','yamaha','suzuki']
motorcycles.insert(0,'ducati')     # 方法insert()在索引0处添加空间，并将值'ducati'存储到这个地方
print(motorcycles)
```

```py
# 运行结果

['ducati','honda','yamaha','suzuki']
```

3. `del lst[idx] -> value` 知道要删除元素在列表中位置，并删除

```py
# 演示代码2-4

motorcycles = ['honda','yamaha','suzuki']
del motorcycles[0]  # 使用del可删除了列表motorcycles中的第一个元素'honda'，条件是知道其索引
print(motorcycles)
```

```py
# 运行结果

['yamaha','suzuki']
```

4. `lst.pop([idx]) -> value` 删除并返回索引idx（默认为结尾）的元素，并接着使用它

```py
# 演示代码2-5

motorcycles = ['honda','yamaha','suzuki']
popped_motorcycle = motorcycles.pop()  # 列表末尾的值'suzuki'已删除，它现在被赋值给了变量popped_motorcycle
print(motorcycles)
print(popped_motorcycle)
```

```py
# 运行结果

['honda','yamaha']
suzuki
```

5. `lst.remove(val)`找到val在该列表的位置，并删除

```py
# 演示代码2-6

motorcycles = ['honda','yamaha','suzuki','ducati']
too_expensive = 'ducati'
motorcycles.remove(too_expensive)  # 用remove()删掉列表中被定义为too_expensive的值，并指出删除原因
print(motorcycles)
print(f"\nA{too_expensive.title()} is too expensive for me.")
```

```py
# 运行结果

['honda','yamaha','suzuki']
A Ducati is too expensive for me.
```

### 2.3组织列表

1. `lst.sort()`永久性地修改列表元素的排列顺序
2. `lst.reverse()`倒着打印列表
3. `len(c)`可快速获悉列表的长度

```py
# 演示代码2-7

cars = ['bmw','audi','toyota','subaru']

cars.sort()    # 或者用print(sorted(cars))也可以达到同样的输出结果
print(cars)
```

```py
# 运行结果

['audi','bmw','subaru','toyata']
```

## 3.操作列表

:::tip
<font color="skyblue">for循环，遍历整个列表，对列表中的每个元素都执行相同的操作</font>
:::

:::tip
<font color="red">小心：</font>
- 忘记缩进额外的代码行和不必要的缩进
- 循环后不必要的缩进
- 漏掉冒号
:::

### 3.1创建数值列表

1. `range([start,]end[,step])`生成列系数，或创建数字列表
2. `min(c)` `max(c)` `sum(c)`对数字列表执行简单的统计计算
3. 列表解析 将for循环和创建新元素的代码合并成一行，并自动附加新元素

`range(1,5) -> 1 2 3 4`

`range(2,12,3) -> 2 5 8 11`

```py
# 演示代码3-1

squares = []   # 创建一个名为squares的空列表

for value in range(1,11):     # 也可以用squares = [value**2 for value in range(1,1)]表示
     squares.append(value**)
print(squares)
squares = [value**2 for value in range(1,11)]
```

```py
# 运行结果
[1,4,9,16,25,36,49,64,81,100]
```

### 3.2使用列表的一部分
1. <font color="red">切片</font> 和`range()`同理,在到达第二个索引之前的元素后停止
2. <font color="red">遍历切片</font> 如果要遍历列表的部分元素，可在for循环中使用切片
3. <font color="red">复制列表</font> 根据既有列表创建全新的列表

```py
# 演示代码3-2

players = ['charles','martina','michael','florence','eli']

print("Here are the first three players on my team:")
for players in players[0:3]:
     print(player.title())
```

```py
# 运行结果

Here are the first three player on my team:
Charles
Martina
Michael
```

## 4. if 语句

### 4.1条件测试

1. <font color="red">==</font> 相等运算符在两边的值相等时返回True,否则返回False
2. <font color="red">!=</font> 判断两个值是否不等
3. <font color="red">< > <= >=</font> 数值比较
4. <font color="red">and or</font> 检查多个条件
5. <font color="red">布尔表达式</font> 结果要么为True，要么为False

```py
# 演示代码4-1

banned_users = ['andrew','carolina','david']
user = 'marie'

if user not in banned_users:
     print(f"{user.title()},you can post a response if you wish.")
```

```py
# 运行结果

Marie,you can post a response if you wish.
```

### 4.2 if 语句

1. <font color="red">`if-else`结构</font> 在条件测试通过时执行一个操作，在没有通过时执行另一个操作
2. <font color="red">`if-elif-else`机构</font> 依次检查每个条件测试，直到遇到通过了的条件测试
3. <font color="red">`elif`代码块</font> 表示多个条件语句

```py
# 演示代码4-2

age = 12
if age < 4:
     price = 0
elif age < 18:
     price = 25
elif age < 65:
     price = 40
else:
price = 20
print(f"Your admission cost is $(price).")
```

```py
#运行结果

Your admission cost is $25.
```

:::tip
<font color="red">常用运算符</font>
- `+、-、*、/`      加减乘除
- `%`               取余
- `//`              取整
- `**`              幂（用x**y或pow(x,y)表示）
- `&`               位运算符中的位与
- `|`               位运算符中的位或
- `^`               位运算符中的位异或
- `~`               位运算符中的取反
- `abs(x)`          取绝对值
- `int(x)`          转为整数
- `float(x)`        转为浮点数
- `complex(re,im)`  将参数转化为复数，re为复数的实部，im为复数的虚部 
:::

## 5. 字典

### <font color="skyblue">`使用字典`</font>

:::tip
键和值之间用冒号分隔，而键值对之间用逗号分隔
:::

1. 访问字典中的值

```py
# 演示代码 5-1

alien_0 = {'color':'green','points':5}
print(alien_0['color])
```

```py
# 运行结果

green
```

2. 添加（或创建）键值对

```py
# 演示代码 5-2

alien_0 = {'color':'green','points':5}
alien_0['x_position'] = 0
alien_0['y_position'] = 25
print(alien_0)
```

```py
# 运行结果

{'color':'green','points':5,'x_position':0,'y_position':25}
```

3. 修改字典中的值

```py
# 演示代码 5-3

alien_0 = {'color':'green'}
alien_0['color'] = 'yellow'
print(f"The alien is now {alien_0['color']}.")
```

```py
# 运行结果

The alien is now yellow.
```

4. 删除键值对（注：删除的键值对会永远消失。）

```py
# 演示代码 5-4

alien_0 = {'color':'green','points':5}
del alien_0['points]
print(alien_0)
```

```py
# 运行结果

{'color':'green'}
```

5. 使用get()来访问值

```py
# 演示代码 5-5

alien_0 = {'color':'green','speed':'slow'}
point_value = alien_0.get('piont','No point value assigned.')
print(point_value)
```

```py
# 运行结果

No point value assigned.
```

### <font color="skyblue">`遍历字典`</font>

1. `for` 循环遍历所有键值对
2. 遍历字典中的所有键/值

```py
# 演示代码 5-6

user_0 = {
     'username':'efermi',
     'first':'enrico',
     'last':'fermi',
}

for key,value in user_0.items()    # 使用这两个变量来打印每个键及其相关联的值
print(f"Key:(key)")
print(f"Value:(value)")
```

```py
# 运行结果

Key: username
Value: efermi
Key: first
Value: enrico
Key: last
Value: fermi
```

## 6. 用户输入和 while 循环

###  <font color="skyblue">`函数input()的工作原理`</font>

1. input()让程序暂停运行，等待用户输入一些文本
2. int()获取数值输入
3. 求模运算符%，它将两个数相除并返回余数

```py 
# 演示代码 6-1

height = input('How tall are you,in inches?')
height = int(height)
if height >= 48:
     print("\nYou're tall enough to ride!")
else:
     print("\nYou're be able to ride when you're little older.")
```

```py
# 运行结果

How tall are you,in inches? 请输入你的身高（英寸）：20

You're be able to ride when you're a little older.
```

###  <font color="skyblue">`使用 while 循环`</font>

`for`循环用于针对集合中的每个元素都执行一个代码块，而 `while` 循环则不断运行，直到指定的条件不满足为止。

```py
# 演示代码 6-2

current_number = 1
while current_number <= 5:
     print(current_number)
     current_number += 1
```

```py
#运行结果
1
2
3
4
5
```

## 7. 函数

### <font color="skyblue">`函数定义`</font>

函数是带名字的代码块，用于完成具体的工作，使用关键词def来定义

```py
# 演示代码 7-1

def greet_user(user_name):
     """显示简单的问候语"""
     print(f"Hello!{user_name.title()}")

greet_user("name")
```

```py
# 运行结果

Hello!Nana
```

让函数greet_user()不仅向用户显示Hello!还可以打印出用户的名字，通过在这里添加username,可让函数接受你给username指定的任何值。代码greet_user('nana')调用函数greet_user(),并向它提供执行函数调用print()所需的信息。这个函数接受你传递给它的名字，并向这个人发出问候。

### <font color="skyblue">`函数调用`</font>

需要在程序中多次执行同一项任务时，无需反复编写完成该任务的代码，只需要调用执行该任务的函数，让Python运行其中的代码即可。

```py
# 演示代码 7-2

def describe_pet(animal_type,pet_name):
     """显示宠物的信息"""
     print(f"\n I have a {animal_type}.")
     print(f"My {animal_type}'s name is {pet_name.title()}.")
describe_pet('hamster','harry')
describe_pet('dog','willie')
```

```py
# 运行结果

I have a hamster.
My hamster's name is Harry.

I have a dog.
My dog's name is Willie.
```

## 9. 类

### <font color="skyblue">`方法__init__()`</font>

方法__init__()是一个特殊方法，每当你根据Dog类创建新实例时，Python都会自动运行它。在这个方法的名称中，开头和末尾个有两个下划线，这是一种约定，旨在避免Python默认方法与普通方法发生名称冲突。务必确保__init__()的两边都有两个下划线，否则当你使用类来创建实例时，将不会自动调用这个方法，进而引发难以发现的错误。

```py 
# 演示代码

# 创建一个表示小狗的类 Dog
# 包含名字和年龄 + 蹲下和打滚
# 使用类去创建表示特定小狗的实参Dog()传递名字和年龄，self会自动传递

class Dog():
     """一次模拟小狗的简单尝试。"""
def __init__(self,name,age):
     """初始化属性 name 和 age。"""
     # 以self为前缀的变量都可供类中的所有方法使用
     # 获取存储在形参name中的值，并将其存储到变量name中，然后该变量被关联到当前创建的实例
     self.name = name
     self.age = age
def sit(self):
     """模拟小狗收到命令时蹲下"""
     print(f"(self.name) is now sitting.")

def roll_over(self):
     """模拟小狗收到命令时打滚。"""
     print(f"{self.name} rolled over!")

my_dog = Dog('Willie',6)
print(f"My dog's name is {my_dog.name}.")
print(f"My dog is {my_dog.age} years old.")
```

```py
# 运行结果

My dog's name is Willie.
My dog is 6 years old.
```

:::tip
<font color="red">常用内置函数</font>
- `print()`           打印输出
- `input()`           获取用户输出的内容
- `open()`            用于打开一个文件，创建一个文件句柄
- `list()`            将一个可迭代对象转换成列表
- `tuple()`           将一个可迭代对象转换成元祖
- `reversed()`        讲一个序列翻转，返回翻转序列的迭代器
- `range()`           生成数据
- `str()`             将数据转化成字符串
- `ALL()`             可迭代对象中全部是True，结果才是True
- `any()`             可迭代对象中一个是True，结果就是True
- `eval()`            执行字符串类型的代码，并返回最终结果
- `dir()`             查看对象的内置属性，访问的是对象中的- __dir__()方法
- `help()`            函数用于查看函数或模块用途的详细说明
:::