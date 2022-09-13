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