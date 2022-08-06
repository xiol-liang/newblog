---
title: 现代C++面试问题总结
date: 2022-04-23
sidebar: auto
---

本文所说的`现代C++`是指 C++11 以后的 C++版本，本文主要总结针对 C++11 以后的 C++新特性的常见面试问题，有关传统 C++的面试问题请参考[C++.md](C++.md)文件。

## C++11 的新特性？

1. 核心特性：**智能指针、右值引用、移动语义、完美转发、lambda 表达式**（必答）
2. 其它特性：auto、decltype、long long、函数返回类型自动推导、删除函数、列表初始化、nullptr、using 声明、限定作用域的枚举类型、const_iterator、override 声明、noexcept 声明、constexpr、范围 for 循环

## 左值和右值

看能不能对表达式取地址，如果能则为左值，否则为右值

## 移动语义

移动语义是指某个对象接管另一个对象所拥有的外部资源的所有权。移动语义的具体实现（即一次 that 对象到 this 对象的移动（move））通常包含以下若干步骤：

1. 如果 this 对象自身也拥有资源，释放该资源
2. 将 this 对象的指针或句柄指向 that 对象所拥有的资源
3. 将 that 对象原本指向该资源的指针或句柄设为空值

## unordered_map 和 map 区别？

1. map 内部实现了一个红黑树（红黑树是非严格平衡二叉搜索树，而 AVL 是严格平衡二叉搜索树），因此 map 内部的所有元素都是有序的，存取一个元素时间复杂度是 O(logn)
2. unordered_map 内部实现了一个哈希表，其元素的排列顺序是无序的，取一个元素时间复杂度是 O(1)

## C++容器类的底层实现？

**以下分别用`K`、`T`指代泛型参数**。
| C++ | 特点 | 底层数据结构 |
| --------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------- |
| `T 变量名[数值]`、`array<T,数值>` | 固定大小数组。支持快速随机访问，不能添加和删除元素 | 普通数组 |
| `vector<T>` | 可变大小数组。支持快速随机访问，在尾部之外的位置插入或删除元素可能很慢 | 数组 |
| `list<T>` | 双向循环链表。只支持双向顺序访问，在任何位置进行插入删除操作都很快 | 链表 |
| `forward_list<T>` | 单向链表。只支持单向顺序访问，在任何位置进行插入删除操作都很快 | 链表 |
| `stack<T>` | 栈。后进先出容器 | 数组或链表 |
| `queue<T>` | 队列。先进先出容器 | 数组或链表 |
| `deque<T>` | 双端队列。支持首尾快速增删，也支持随机访问 | 底层数据结构为一个中央控制器和多个缓冲区 |
| `priority_queue<T>` | 优先级队列。队列中的元素具有优先级，优先级最高的元素位于队首，队首元素可以弹出队列 | 二叉大根堆 |
| `unordered_set<T>` | 集合。关键字无序且不可重复出现 | 哈希表 |
| `set<T>` | 集合。关键字有序且不可重复出现 | 红黑树 |
| `unordered_map<K,T>` | 关联数组。保存键值对，键值对无序且键不可重复出现 | 哈希表 |
| `map<K,T>` | 关联数组。保存键值对，键值对有序且键不可重复出现 | 红黑树 |

注意 stack、queue、priority_queue 均为容器适配器。stack 和 queue 底层一般用 list 或 deque 实现，不用 vector 的原因应该是容量大小有限制，扩容耗时。priority_queue 一般用 vector 作底层容器。

## 智能指针？

C++11 中引入了智能指针的概念，方便管理堆内存。智能指针是利用了一种叫做 RAII（资源获取即初始化）的技术对普通的指针进行封装，这使得智能指针实质是一个对象，行为表现的却像一个指针。智能指针就是一个作用是资源管理的类，它是在堆栈上声明的类模板，并可通过使用指向某个堆分配的对象的裸指针进行初始化（RAII）。在初始化智能指针后，它将拥有裸指针，这意味着智能指针负责删除裸指针指定的内存， 智能指针析构函数包括要删除的调用，当智能指针超出范围时将调用其析构函数，析构函数会自动释放资源。

1. unique_ptr：实现的是专属所有权的语义，它是智能指针的默认选项。unique_ptr 是个只移型别，不能复制或共享。unique_ptr 小巧高效，大小等同于一个指针且支持右值引用，从而可实现快速插入和对 STL 集合的检索。
2. shared_ptr：采用引用计数的智能指针。如果你想要将一个裸指针分配给多个所有者，请使用该指针。直至所有 shared_ptr 所有者超出了范围或放弃所有权，才会删除裸指针。大小为两个裸指针：一个用于指向裸指针指向的对象，另一个用于指向包含引用计数的共享控制块。
3. weak_ptr ：结合 shared_ptr 使用的特例智能指针。 weak_ptr 提供对一个或多个 shared_ptr 实例拥有的对象的访问，但不参与引用计数。如果你想要观察某个对象但不需要其保持活动状态，请使用该实例。在某些情况下，用于断开 shared_ptr 实例间的循环引用。

## shared_ptr 的线程安全性？

两个角度：

1. 引用计数的操作必须是原子的！（标准库中已经实现了引用计数的原子性）
2. 多线程读写 shared_ptr 要加锁！（查看[讲解链接](https://blog.csdn.net/Solstice/article/details/8547547)）

## lambda 表达式的捕获列表？

1. `[]`：空捕获列表。lambda 不能使用所在函数中的任何局部变量；
2. `[a, b, ……]`：以值捕获方式捕获局部变量 a, b, ……；
3. `[&a, &b, ……]`：以引用捕获方式捕获局部变量 a, b, ……；
4. `[=]`：以值捕获方式捕获 lambda 表达式所在的函数体内所有局部变量；
5. `[&]`：以引用捕获方式捕获 lambda 表达式所在的函数体内所有局部变量；
6. `[&, a, b, ……]`：以值捕获方式捕获局部变量 a, b, ……，除此以外 lambda 表达式所在的函数体内所有局部变量都以引用捕获方式捕获；
7. `[=, &a, &b, ……]`：以引用捕获方式捕获局部变量 a, b, ……，除此以外 lambda 表达式所在的函数体内所有局部变量都以值捕获方式捕获。

注意，lambda 表达式无需捕获即可直接使用全局变量以及全局函数。

## auto 和 decltype 的区别

auto 会忽略引用和顶层 const，但底层 const 会被保留下来；但 decltype 不会忽略。

## C++20 四大新特性

1. Concepts（概念）：简化泛型编程，一个 Concept 就是一个编译期判断，用于约束模版参数，Concepts 则是这些编译期判断的合集。
2. Ranges（范围）：一个引用元素序列的对象，在概念上类似于一对迭代器。可以很方便地将多个算法组合在一起，写法更简单，语义更清晰，并且还可以实现延迟计算避免了中间的临时变量，性能也会更好。
3. Modules（模块）：取代头文件，通过 import 包来使用库。
4. Coroutines（协程）：简化异步网络程序的编写，co_await 用来挂起和恢复一个协程，co_return 用来返回协程的结果，co_yield 返回一个值并且挂起协程。如果一个函数体中有这三个关键字之一就变成 Coroutine 了。