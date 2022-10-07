(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{623:function(t,v,_){"use strict";_.r(v);var e=_(9),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("本文主要总结一些 C++（还有部分 C 语言）的常见面试问题，有关针对 C++11 以后的 C++新特性的面试问题请参考"),_("RouterLink",{attrs:{to:"/docs/CS_basic/现代C++.html"}},[t._v("现代 C++.md")]),t._v("文件。")],1),t._v(" "),_("h2",{attrs:{id:"内存分配"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内存分配"}},[t._v("#")]),t._v(" 内存分配")]),t._v(" "),_("h3",{attrs:{id:"栈区和堆区的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#栈区和堆区的区别"}},[t._v("#")]),t._v(" 栈区和堆区的区别？")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("申请方式")]),t._v(" "),_("ol",[_("li",[t._v("栈区：由编译器自动分配释放，存放函数的参数值，局部变量值等；")]),t._v(" "),_("li",[t._v("堆区：一般由程序员分配释放（使用 new/delete 或 malloc/free），若程序员不释放，程序结束时可能由 OS 回收。")])])]),t._v(" "),_("li",[_("p",[t._v("操作方式")]),t._v(" "),_("ol",[_("li",[t._v("栈区：操作方式类似于数据结构中的栈；")]),t._v(" "),_("li",[t._v("堆区：不同于数据结构中的堆，分配方式类似于链表。")])])]),t._v(" "),_("li",[_("p",[t._v("申请后系统的响应")]),t._v(" "),_("ol",[_("li",[t._v("栈区：只要栈的剩余空间大于所申请空间，系统将为程序提供内存，否则将报异常提示栈溢出；")]),t._v(" "),_("li",[t._v("堆区：首先应该知道操作系统有一个记录空闲内存地址的链表，当系统收到程序的申请时，会遍历该链表，寻找第一个空间大于所申请空间的堆结点，然后将该结点从空闲结点链表中删除，并将该结点的空间分配给程序，另外，对于大多数系统，会在这块内存空间中的首地址处记录本次分配的大小，这样，代码中的 delete 语句才能正确的释放本内存空间。另外，由于找到的堆结点的大小不一定正好等于申请的大小，系统会自动的将多余的那部分重新放入空闲链表中。")])])]),t._v(" "),_("li",[_("p",[t._v("申请大小的限制")]),t._v(" "),_("ol",[_("li",[t._v("栈区：在 Windows 下,栈是向低地址扩展的数据结构，是一块连续的内存的区域。这句话的意思是栈顶的地址和栈的最大容量是系统预先规定好的，在 WINDOWS 下，栈的大小是 2M（也有的说是 1M，总之是一个编译时就确定的常数），如果申请的空间超过栈的剩余空间时，将提示 overflow。因此，能从栈获得的空间较小。")]),t._v(" "),_("li",[t._v("堆区：堆是向高地址扩展的数据结构，是不连续的内存区域。这是由于系统是用链表来存储的空闲内存地址的，自然是不连续的，而链表的遍历方向是由低地址向高地址。堆的大小受限于计算机系统中有效的虚拟内存。由此可见，堆获得的空间比较灵活，也比较大。")])])]),t._v(" "),_("li",[_("p",[t._v("申请效率的比较")]),t._v(" "),_("ol",[_("li",[t._v("栈区：系统自动分配，速度较快。但程序员是无法控制的。")]),t._v(" "),_("li",[t._v("堆区：由 new 分配的内存，一般速度比较慢，而且容易产生内存碎片，不过用起来最方便.")])])]),t._v(" "),_("li",[_("p",[t._v("堆和栈中的存储内容")]),t._v(" "),_("ol",[_("li",[t._v("栈区：在函数调用时，第一个进栈的是主函数中后的下一条指令（函数调用语句的下一条可执行语句）的地址，然后是函数的各个参数，在大多数的 C 编译器中，参数是由右往左入栈的，然后是函数中的局部变量。注意静态变量是不入栈的。当本次函数调用结束后，局部变量先出栈，然后是参数，最后栈顶指针指向最开始存的地址，也就是主函数中的下一条指令，程序由该点继续运行。")]),t._v(" "),_("li",[t._v("堆区：一般是在堆的头部用一个字节存放堆的大小。堆中的具体内容有程序员安排。")])])])]),t._v(" "),_("h3",{attrs:{id:"c-的内存分配方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#c-的内存分配方式"}},[t._v("#")]),t._v(" C++的内存分配方式？")]),t._v(" "),_("ol",[_("li",[t._v("栈")]),t._v(" "),_("li",[t._v("堆")]),t._v(" "),_("li",[t._v("全局/静态存储区")]),t._v(" "),_("li",[t._v("常量存储区")]),t._v(" "),_("li",[t._v("程序代码区")])]),t._v(" "),_("h3",{attrs:{id:"c-的内存分配方式-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#c-的内存分配方式-2"}},[t._v("#")]),t._v(" C 的内存分配方式？")]),t._v(" "),_("ol",[_("li",[t._v("BSS 段: 用来存放程序中未初始化的全局变量。")]),t._v(" "),_("li",[t._v("数据段：用来存放程序中明确被初始化的全局变量、静态变量和常量。")]),t._v(" "),_("li",[t._v("代码段")]),t._v(" "),_("li",[t._v("堆")]),t._v(" "),_("li",[t._v("栈")])]),t._v(" "),_("h3",{attrs:{id:"什么是内存泄漏"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是内存泄漏"}},[t._v("#")]),t._v(" 什么是内存泄漏？")]),t._v(" "),_("p",[t._v("内存泄漏并非指的是内存在物理上的消失，而是分配某段内存后，失去了对该内存的控制，造成内存的浪费。比如 C++ new 之后没有 delete。")]),t._v(" "),_("h3",{attrs:{id:"new-delete、malloc-free-区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#new-delete、malloc-free-区别"}},[t._v("#")]),t._v(" new/delete、malloc/free 区别？")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("特征")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("new/delete")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("malloc/free")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("分配内存的位置")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("自由存储区")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("堆")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("内存分配成功的返回值")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("完整类型指针")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("void*")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("内存分配失败的返回值")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("默认抛出异常")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("返回 NULL")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("分配内存的大小")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("由编译器根据类型计算得出")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("必须显式指定字节数")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("处理数组")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("有处理数组的 new 版本 new[]")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("需要用户计算数组的大小后进行内存分配")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("是否相互调用")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("可以，看具体的 operator new/delete 实现")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("不可调用 new")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("函数重载")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("允许")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("不允许")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("构造函数与析构函数")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("调用")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("不调用")])])])]),t._v(" "),_("h3",{attrs:{id:"delete-与-delete-区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#delete-与-delete-区别"}},[t._v("#")]),t._v(" delete 与 delete []区别？")]),t._v(" "),_("p",[t._v("delete 只会调用一次析构函数，而 delete[]会针对每一个成员都调用一次析构函数。")]),t._v(" "),_("h3",{attrs:{id:"delete-如何确定指向数组的大小"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#delete-如何确定指向数组的大小"}},[t._v("#")]),t._v(" delete []如何确定指向数组的大小？")]),t._v(" "),_("p",[t._v("编译器在 new [] 一个对象数组时多分配了 4 个字节的大小，专门保存数组的大小，在 delete [] 时就可以取出这个保存的数，就知道数组的大小了。")]),t._v(" "),_("h3",{attrs:{id:"内存对齐的原则和作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内存对齐的原则和作用"}},[t._v("#")]),t._v(" 内存对齐的原则和作用")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("原则")]),t._v(" "),_("p",[t._v("从 0 位置开始存储；变量存储的起始位置是该变量大小的整数倍；结构体总的大小是其最大元素的整数倍，不足的后面要补齐。")])]),t._v(" "),_("li",[_("p",[t._v("作用")]),t._v(" "),_("ol",[_("li",[t._v("不是所有的硬件平台都能访问任意地址上的任意数据，某些硬件平台只能在某些地址处取某些特定类型的数据，否则抛出硬件异常。")]),t._v(" "),_("li",[t._v("由于 CPU 在读取内存的时候是一块一块进行读取的，经过内存对齐之后，CPU 的内存访问速度大大提升。")])])])]),t._v(" "),_("h3",{attrs:{id:"delete-this-合法吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#delete-this-合法吗"}},[t._v("#")]),t._v(" delete this 合法吗？")]),t._v(" "),_("p",[t._v("合法，但是")]),t._v(" "),_("ol",[_("li",[t._v("必须保证 this 对象是通过 new（不是 new[]、不是 placement new、不是栈上、不是全局、不是其他对象成员）分配的")]),t._v(" "),_("li",[t._v("必须保证调用 delete this 的成员函数是最后一个调用 this 的成员函数")]),t._v(" "),_("li",[t._v("必须保证成员函数的 delete this 后面没有调用 this 了")])]),t._v(" "),_("h3",{attrs:{id:"如何定义一个只能在堆上-栈上-生成对象的类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何定义一个只能在堆上-栈上-生成对象的类"}},[t._v("#")]),t._v(" 如何定义一个只能在堆上（栈上）生成对象的类？")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("只能在堆上")]),t._v(" "),_("p",[t._v("方法：将析构函数设置为私有")]),t._v(" "),_("p",[t._v("原因：C++ 是静态绑定语言，编译器管理栈上对象的生命周期，编译器在为类对象分配栈空间时，会先检查类的析构函数的访问性。若析构函数不可访问，则不能在栈上创建对象。")])]),t._v(" "),_("li",[_("p",[t._v("只能在栈上")]),t._v(" "),_("p",[t._v("方法：将 new 和 delete 重载为私有")]),t._v(" "),_("p",[t._v("原因：在堆上生成对象，使用 new 关键词操作，其过程分为两阶段：第一阶段，使用 new 在堆上寻找可用内存，分配给对象；第二阶段，调用构造函数生成对象。将 new 操作设置为私有，那么第一阶段就无法完成，就不能够在堆上生成对象。")])])]),t._v(" "),_("h2",{attrs:{id:"语法的作用或好处"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#语法的作用或好处"}},[t._v("#")]),t._v(" 语法的作用或好处")]),t._v(" "),_("h3",{attrs:{id:"static-的作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#static-的作用"}},[t._v("#")]),t._v(" static 的作用？")]),t._v(" "),_("ol",[_("li",[t._v("修饰普通变量，修改变量的存储区域和生命周期，使变量存储在静态区，在 main 函数运行前就分配了空间，如果有初始值就用初始值初始化它，如果没有初始值系统用默认值初始化它。")]),t._v(" "),_("li",[t._v("修饰普通函数，表明函数的作用范围，仅在定义该函数的文件内才能使用。在多人开发项目时，为了防止与他人命名空间里的函数重名，可以将函数定位为 static。")]),t._v(" "),_("li",[t._v("修饰成员变量，修饰成员变量使所有的对象只保存一个该变量，而且不需要生成对象就可以访问该成员。")]),t._v(" "),_("li",[t._v("修饰成员函数，修饰成员函数使得不需要生成对象就可以访问该函数，但是在 static 函数内不能访问非静态成员。")])]),t._v(" "),_("h3",{attrs:{id:"this-指针"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#this-指针"}},[t._v("#")]),t._v(" this 指针")]),t._v(" "),_("ol",[_("li",[t._v("this 指针是一个隐含于每一个非静态成员函数中的特殊指针。它指向调用该成员函数的那个对象。")]),t._v(" "),_("li",[t._v("当对一个对象调用成员函数时，编译程序先将对象的地址赋给 this 指针，然后调用成员函数，每次成员函数存取数据成员时，都隐式使用 this 指针。")]),t._v(" "),_("li",[t._v("当一个成员函数被调用时，自动向它传递一个隐含的参数，该参数是一个指向这个成员函数所在的对象的指针。")]),t._v(" "),_("li",[t._v("this 指针被隐含地声明为: "),_("code",[t._v("ClassName *const this")]),t._v("，这意味着不能给 this 指针赋值；在 ClassName 类的 const 成员函数中，this 指针的类型为："),_("code",[t._v("const ClassName* const")]),t._v("，这说明不能对 this 指针所指向的这种对象是不可修改的（即不能对这种对象的数据成员进行赋值操作）。")]),t._v(" "),_("li",[t._v("this 并不是一个常规变量，而是个右值，所以不能取得 this 的地址（不能 &this）。")]),t._v(" "),_("li",[t._v("在以下场景中，经常需要显式引用 this 指针：\n"),_("ol",[_("li",[t._v("为实现对象的链式引用；")]),t._v(" "),_("li",[t._v("为避免对同一对象进行赋值操作；")]),t._v(" "),_("li",[t._v("在实现一些数据结构时，如 list。")])])])]),t._v(" "),_("h3",{attrs:{id:"内联函数的优缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内联函数的优缺点"}},[t._v("#")]),t._v(" 内联函数的优缺点")]),t._v(" "),_("ol",[_("li",[t._v("优点\n"),_("ol",[_("li",[t._v("内联函数同宏函数一样将在被调用处进行代码展开，省去了参数压栈、栈帧开辟与回收，结果返回等，从而提高程序运行速度。")]),t._v(" "),_("li",[t._v("内联函数相比宏函数来说，在代码展开时，会做安全检查或自动类型转换（同普通函数），而宏定义则不会。")]),t._v(" "),_("li",[t._v("在类中声明同时定义的成员函数，自动转化为内联函数，因此内联函数可以访问类的成员变量，宏定义则不能。")]),t._v(" "),_("li",[t._v("内联函数在运行时可调试，而宏定义不可以。")])])]),t._v(" "),_("li",[t._v("缺点\n"),_("ol",[_("li",[t._v("代码膨胀。内联是以代码膨胀（复制）为代价，消除函数调用带来的开销。如果执行函数体内代码的时间，相比于函数调用的开销较大，那么效率的收获会很少。另一方面，每一处内联函数的调用都要复制代码，将使程序的总代码量增大，消耗更多的内存空间。")]),t._v(" "),_("li",[t._v("inline 函数无法随着函数库升级而升级。inline 函数的改变需要重新编译，不像 non-inline 可以直接链接。")]),t._v(" "),_("li",[t._v("是否内联，程序员不可控。内联函数只是对编译器的建议，是否对函数内联，决定权在于编译器。")])])])]),t._v(" "),_("h3",{attrs:{id:"递归的优缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#递归的优缺点"}},[t._v("#")]),t._v(" 递归的优缺点？")]),t._v(" "),_("p",[t._v("优点：代码简洁，容易理解")]),t._v(" "),_("p",[t._v("缺点：时间效率低，递归爆栈")]),t._v(" "),_("h3",{attrs:{id:"const-的好处"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#const-的好处"}},[t._v("#")]),t._v(" const 的好处？")]),t._v(" "),_("ol",[_("li",[t._v("提高代码安全性。")]),t._v(" "),_("li",[t._v("提高代码的可读性和可维护性。")]),t._v(" "),_("li",[t._v("提高程序的效率（常引用）。")]),t._v(" "),_("li",[t._v("当 const 和 non-const 成员函数具有本质上相同的实现的时候，使用 non-const 版本调用 const 版本可以避免重复代码。")])]),t._v(" "),_("h3",{attrs:{id:"成员初始化列表的作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#成员初始化列表的作用"}},[t._v("#")]),t._v(" 成员初始化列表的作用？")]),t._v(" "),_("ol",[_("li",[t._v("对象成员变量的初始化动作发生在进入构造函数之前，进入构造函数体后，进行的是对成员变量的赋值操作，而不是初始化。如果不用成员初始化列表，那么对对象成员进行的分别是一次隐式的默认构造函数的调用和一次赋值操作符的调用；而使用成员初始化列表，仅需执行一次初始化操作，效率要高。")]),t._v(" "),_("li",[t._v("当类成员中含有一个 const 成员或者是一个引用时，他们也必须通过成员初始化列表进行初始化，因为这两种对象要在声明后需要马上初始化，而在构造函数中，做的是对他们的赋值，这样是不被允许的。")]),t._v(" "),_("li",[t._v("子类初始化父类的私有成员，只能在成员初始化列表中显式调用父类的构造函数。")])]),t._v(" "),_("h2",{attrs:{id:"两种语法的对比区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#两种语法的对比区别"}},[t._v("#")]),t._v(" 两种语法的对比区别")]),t._v(" "),_("h3",{attrs:{id:"引用与指针有什么区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#引用与指针有什么区别"}},[t._v("#")]),t._v(" 引用与指针有什么区别？")]),t._v(" "),_("ol",[_("li",[t._v("引用必须被初始化，指针不必。")]),t._v(" "),_("li",[t._v("引用初始化以后不能被改变，指针可以改变所指的对象。")]),t._v(" "),_("li",[t._v("不存在指向空值的引用，但是存在指向空值的指针。")])]),t._v(" "),_("h3",{attrs:{id:"结构体与联合有何区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#结构体与联合有何区别"}},[t._v("#")]),t._v(" 结构体与联合有何区别？")]),t._v(" "),_("ol",[_("li",[t._v("结构体和联合都是由多个不同的数据类型成员组成，但在任何同一时刻，联合中只存放了一个被选中的成员（所有成员共用一块地址空间），而结构体的所有成员都存在（不同成员的存放地址不同）。")]),t._v(" "),_("li",[t._v("对于联合的不同成员赋值，将会对其它成员重写，原来成员的值就不存在了。而对于结构体的不同成员赋值是互不影响的。")])]),t._v(" "),_("h3",{attrs:{id:"重载-overload-和重写-overried-有的书也叫做覆盖-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#重载-overload-和重写-overried-有的书也叫做覆盖-的区别"}},[t._v("#")]),t._v(" 重载（overload）和重写（overried，有的书也叫做"),_("code",[t._v("覆盖")]),t._v("）的区别？")]),t._v(" "),_("ol",[_("li",[t._v("重载：是指允许存在多个同名函数，而这些函数的参数列表不同")]),t._v(" "),_("li",[t._v("重写：是指派生类重新定义基类虚函数的方法。")])]),t._v(" "),_("h2",{attrs:{id:"实现相似作用的多种语法汇总"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实现相似作用的多种语法汇总"}},[t._v("#")]),t._v(" 实现相似作用的多种语法汇总")]),t._v(" "),_("h3",{attrs:{id:"c-语言支持的四种变量存储类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#c-语言支持的四种变量存储类型"}},[t._v("#")]),t._v(" C 语言支持的四种变量存储类型？")]),t._v(" "),_("ol",[_("li",[t._v("auto：auto 称为自动变量（局部变量）。")]),t._v(" "),_("li",[t._v("static：static 称为静态变量。根据变量的类型可以分为静态局部变量和静态全局变量。\n"),_("ol",[_("li",[t._v("静态局部变量：它与局部变量的区别在于，在函数退出时，这个变量始终存在，但不能被其它函数使用；当再次进入该函数时，将保存上次的结果。")]),t._v(" "),_("li",[t._v("静态全局变量：只在定义它的源文件中可见而在其它源文件中不可见的变量。它与全局变量的区别是：全局变量可以被其它源文件使用，而静态全局变量只能被所在的源文件使用。")])])]),t._v(" "),_("li",[t._v("extern：extern 称为外部申明。为了使变量或者函数除了在定义它的源文件中可以使用外，还可以被其它文件使用。因此通知每一个程序模块文件，此时可用 extern 来说明。")]),t._v(" "),_("li",[t._v("register：register 称为寄存器变量。它只能用于整型和字符型变量。定义符 register 说明的变量被存储在 CPU 的寄存器中，定义一个整型寄存器变量可写成: register int a;")])]),t._v(" "),_("p",[t._v("对于以上四种数据的存储位置：register 变量存在 CPU 的寄存器中；auto 类型变量存在内存的栈；static 型的局部变量和全局变量以及 extern 型变量（即全局变量），存在于内存的静态区。")]),t._v(" "),_("h3",{attrs:{id:"c-四种类型转换-static-cast-dynamic-cast-const-cast-reinterpret-cast"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#c-四种类型转换-static-cast-dynamic-cast-const-cast-reinterpret-cast"}},[t._v("#")]),t._v(" C++四种类型转换：static_cast, dynamic_cast, const_cast, reinterpret_cast")]),t._v(" "),_("ol",[_("li",[t._v("static_cast\n"),_("ul",[_("li",[t._v("用于非多态类型的转换")]),t._v(" "),_("li",[t._v("不执行运行时类型检查（转换安全性不如 dynamic_cast）")]),t._v(" "),_("li",[t._v("通常用于转换数值数据类型")]),t._v(" "),_("li",[t._v("可以在整个类层次结构中移动指针，子类转化为父类安全（向上转换），父类转化为子类不安全（因为子类可能有不在父类的字段或方法）")])])]),t._v(" "),_("li",[t._v("dynamic_cast\n"),_("ul",[_("li",[t._v("用于多态类型的转换")]),t._v(" "),_("li",[t._v("执行行运行时类型检查")]),t._v(" "),_("li",[t._v("只适用于指针或引用")]),t._v(" "),_("li",[t._v("对不明确的指针的转换将失败（返回 nullptr），但不引发异常")]),t._v(" "),_("li",[t._v("可以在整个类层次结构中移动指针，包括向上转换、向下转换")])])]),t._v(" "),_("li",[t._v("const_cast 用于移除 const、volatile 和 __unaligned 特性")]),t._v(" "),_("li",[t._v("reinterpret_cast 几乎什么都可以转，比如将 int 转指针，可能会出问题，尽量少用。")])]),t._v(" "),_("p",[t._v("C 的强制转换表面上看起来功能强大什么都能转，但是转化不够明确，不能进行错误检查，容易出错。")]),t._v(" "),_("h3",{attrs:{id:"c-中顶层-const-和底层-const"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#c-中顶层-const-和底层-const"}},[t._v("#")]),t._v(" C++中顶层 const 和底层 const？")]),t._v(" "),_("p",[t._v("如果 const 右结合修饰的为类型或者*，那这个 const 就是一个底层 const，表示指针所指向的对象是个常量。")]),t._v(" "),_("p",[t._v("如果 const 右结合修饰的为标识符，那这个 const 就是一个顶层 const，表示指针本身是个常量。")]),t._v(" "),_("h2",{attrs:{id:"语法的使用场景和注意事项"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#语法的使用场景和注意事项"}},[t._v("#")]),t._v(" 语法的使用场景和注意事项")]),t._v(" "),_("h3",{attrs:{id:"在什么时候需要使用常引用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#在什么时候需要使用常引用"}},[t._v("#")]),t._v(" 在什么时候需要使用"),_("code",[t._v("常引用")]),t._v("？")]),t._v(" "),_("p",[t._v("如果既要利用引用提高程序的效率，又要保护传递给函数的数据不在函数中被改变，就应使用常引用。")]),t._v(" "),_("h3",{attrs:{id:"将引用作为函数返回值类型的优点和注意事项"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#将引用作为函数返回值类型的优点和注意事项"}},[t._v("#")]),t._v(" 将"),_("code",[t._v("引用")]),t._v("作为函数返回值类型的优点和注意事项？")]),t._v(" "),_("p",[t._v("好处：在内存中不产生被返回值的副本，提高效率")]),t._v(" "),_("p",[t._v("注意事项：")]),t._v(" "),_("ol",[_("li",[t._v("不能返回局部变量的引用。主要原因是局部变量会在函数返回后被销毁，因此被返回的引用就成为了"),_("code",[t._v("无所指")]),t._v("的引用，程序会进入未知状态。")]),t._v(" "),_("li",[t._v("不能返回函数内部 new 分配的内存的引用。原因是引用所指向的空间就无法释放，造成内存泄漏。")]),t._v(" "),_("li",[t._v("可以返回类成员的引用，但最好是 const。主要原因是如果其它对象可以获得该属性的非常量引用（或指针），那么对该属性的单纯赋值就会破坏业务规则的完整性。")]),t._v(" "),_("li",[t._v("流操作符和赋值操作符重载返回值申明为引用。")]),t._v(" "),_("li",[t._v("在另外的一些操作符中，却千万不能返回引用，例如四则运算符。")])]),t._v(" "),_("h3",{attrs:{id:"assert"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#assert"}},[t._v("#")]),t._v(" assert")]),t._v(" "),_("p",[t._v("断言，是宏，而非函数。assert 宏的原型定义在 "),_("code",[t._v("<assert.h>")]),t._v("（C）、"),_("code",[t._v("<cassert>")]),t._v("（C++）中，其作用是如果它的条件返回错误，则终止程序执行。可以通过定义 NDEBUG 来关闭 assert，但是需要在源代码的开头，"),_("code",[t._v("include <assert.h>")]),t._v(" 之前。")]),t._v(" "),_("h3",{attrs:{id:"sizeof"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sizeof"}},[t._v("#")]),t._v(" sizeof()")]),t._v(" "),_("ol",[_("li",[t._v("sizeof 对数组，得到整个数组所占空间大小。")]),t._v(" "),_("li",[t._v("sizeof 对指针，得到指针本身所占空间大小。")])]),t._v(" "),_("h3",{attrs:{id:"sizeof-一个-vector-会得到什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sizeof-一个-vector-会得到什么"}},[t._v("#")]),t._v(" sizeof 一个 vector 会得到什么？")]),t._v(" "),_("p",[t._v("sizeof 一个 vector 的结果"),_("strong",[t._v("与 vector 中的元素个数无关")]),t._v("，具体受机器和 vector 实现影响。这是因为 vector 的元素都存放在堆上，vector 只持有了一个指向堆上元素的指针。")]),t._v(" "),_("h2",{attrs:{id:"继承与多态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#继承与多态"}},[t._v("#")]),t._v(" 继承与多态")]),t._v(" "),_("h3",{attrs:{id:"继承的概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#继承的概念"}},[t._v("#")]),t._v(" 继承的概念")]),t._v(" "),_("p",[t._v("派生类可以具有基类的特性，共享基类的成员函数，使用基类的成员，还可以定义自己的数据成员和成员函数。从一个基类派生的称为单继承，从多个基类派生的称为多继承。")]),t._v(" "),_("p",[t._v("C++中，继承方式有 3 种：")]),t._v(" "),_("ol",[_("li",[t._v("公有继承：public、protected、private 权限均不变")]),t._v(" "),_("li",[t._v("私有继承：public、protected 权限变为 private")]),t._v(" "),_("li",[t._v("保护继承：public 变为 protected")])]),t._v(" "),_("p",[t._v("实现的访问控制如下：")]),t._v(" "),_("ol",[_("li",[t._v("public：自己、友元、派生类、外界均可访问")]),t._v(" "),_("li",[t._v("protected：自己、友元、派生类可以访问")]),t._v(" "),_("li",[t._v("private：自己、友元可以访问")])]),t._v(" "),_("h3",{attrs:{id:"多态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#多态"}},[t._v("#")]),t._v(" 多态")]),t._v(" "),_("p",[t._v("多态性指相同对象收到不同消息或不同对象收到相同消息时产生不同的实现动作。C++支持两种多态性：编译时多态性，运行时多态性。")]),t._v(" "),_("ol",[_("li",[t._v("编译时多态性（静态多态）：通过重载函数和泛型编程实现")]),t._v(" "),_("li",[t._v("运行时多态性（动态多态）：通过虚函数实现")])]),t._v(" "),_("h3",{attrs:{id:"动态绑定的概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#动态绑定的概念"}},[t._v("#")]),t._v(" 动态绑定的概念")]),t._v(" "),_("p",[t._v("动态绑定是指在运行时（非编译期）判断所引用对象的实际类型，程序运行过程中，把函数调用与响应调用所需要的代码相结合的过程称为动态绑定。")]),t._v(" "),_("p",[t._v("C++中，通过基类的引用或指针调用虚函数时，发生动态绑定。C++中动态绑定是通过虚函数实现的，而虚函数是通过一张虚函数表实现的。这个表中记录了虚函数的地址，保证动态绑定时能够根据对象的实际类型调用正确的函数。编译器必须保证虚函数表的指针存在于对象实例中最前面的位置（这是为了保证正确取到虚函数的偏移量）。这意味着我们通过对象实例的地址得到这张虚函数表，然后就可以遍历其中函数指针，并调用相应的函数。")]),t._v(" "),_("h3",{attrs:{id:"虚函数和纯虚函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#虚函数和纯虚函数"}},[t._v("#")]),t._v(" 虚函数和纯虚函数")]),t._v(" "),_("p",[t._v("用 virtual 关键字修饰的成员函数就是虚函数，虚函数的作用就是实现多态性。纯虚函数是一种特殊的虚函数，在基类中不能对虚函数给出有意义的实现，而把它的实现留给派生类去做。只含有虚函数的类可以被实例化，含有纯虚函数的类不能被实例化。")]),t._v(" "),_("h3",{attrs:{id:"那些函数不能是虚函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#那些函数不能是虚函数"}},[t._v("#")]),t._v(" 那些函数不能是虚函数？")]),t._v(" "),_("ol",[_("li",[t._v("普通函数（非类成员函数）不能是虚函数")]),t._v(" "),_("li",[t._v("静态函数（static）不能是虚函数")]),t._v(" "),_("li",[t._v("构造函数不能是虚函数（因为在调用构造函数时，虚表指针并没有在对象的内存空间中，必须要构造函数调用完成后才会形成虚表指针）")]),t._v(" "),_("li",[t._v("内联函数不能是表现多态性时的虚函数")])]),t._v(" "),_("h3",{attrs:{id:"虚函数指针、虚函数表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#虚函数指针、虚函数表"}},[t._v("#")]),t._v(" 虚函数指针、虚函数表")]),t._v(" "),_("ol",[_("li",[t._v("虚函数指针：在含有虚函数类的对象中，指向虚函数表，在运行时确定。")]),t._v(" "),_("li",[t._v("虚函数表：在程序只读数据段存放虚函数指针，如果派生类实现了基类的某个虚函数，则在虚表中覆盖原本基类的那个虚函数指针，在编译时根据类的声明创建。")])]),t._v(" "),_("h3",{attrs:{id:"c-类中定义虚函数和不定义在初始化的时候大小是不是一样"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#c-类中定义虚函数和不定义在初始化的时候大小是不是一样"}},[t._v("#")]),t._v(" C++类中定义虚函数和不定义在初始化的时候大小是不是一样？")]),t._v(" "),_("p",[t._v("定义了虚函数的类要大一些，因为要建立虚函数表")]),t._v(" "),_("h3",{attrs:{id:"构造函数能不能声明成虚函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构造函数能不能声明成虚函数"}},[t._v("#")]),t._v(" 构造函数能不能声明成虚函数？")]),t._v(" "),_("p",[t._v("不能。")]),t._v(" "),_("ol",[_("li",[t._v("当创建一个派生类对象时，会先调用基类的构造函数，但是派生类已经覆盖了基类的构造函数，所以也就无法进一步执行，导致程序出错。")]),t._v(" "),_("li",[t._v("在创建对象时，首先要调用构造函数，然后构造函数是虚函数，就需要用虚函数指针去调用，但是，对象都还没构造，也就没有虚函数指针，造成了一个循环调用的问题。")])]),t._v(" "),_("h3",{attrs:{id:"基类的析构函数不是虚函数-会带来什么问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基类的析构函数不是虚函数-会带来什么问题"}},[t._v("#")]),t._v(" 基类的析构函数不是虚函数，会带来什么问题？")]),t._v(" "),_("p",[t._v("delete 指向派生类对象的基类指针时，只有基类的内存被释放，派生类的没有。这样就内存泄漏了。")]),t._v(" "),_("h3",{attrs:{id:"析构函数能抛出异常吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#析构函数能抛出异常吗"}},[t._v("#")]),t._v(" 析构函数能抛出异常吗?")]),t._v(" "),_("p",[t._v("C++标准指明析构函数不能、也不应该抛出异常。")]),t._v(" "),_("ol",[_("li",[t._v("如果析构函数抛出异常，则异常点之后的程序不会执行，如果析构函数在异常点之后执行了某些必要的动作比如释放某些资源，则这些动作不会执行，会造成诸如资源泄漏的问题。")]),t._v(" "),_("li",[t._v("通常异常发生时，c++的机制会调用已经构造对象的析构函数来释放资源，此时若析构函数本身也抛出异常，则前一个异常尚未处理，又有新的异常，会造成程序崩溃的问题。")])]),t._v(" "),_("h3",{attrs:{id:"构造函数和析构函数中调用虚函数吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构造函数和析构函数中调用虚函数吗"}},[t._v("#")]),t._v(" 构造函数和析构函数中调用虚函数吗？")]),t._v(" "),_("p",[t._v("从语法上讲，调用完全没有问题。但是从效果上看，往往不能达到多态的效果。\nEffective C++的解释是：派生类对象的基类成分会在派生类自身成分被构造之前先构造妥当，派生类对象构造期间会首先进入基类的构造函数，在基类构造函数执行时继承类的成员变量尚未初始化，对象类型是基类类型，而不是派生类类型，虚函数会被编译器解析为基类，若使用运行时类型信息，也会把对象视为基类类型，构造期间调用虚函数，会调用自己的虚函数，此时虚函数和普通函数没有区别了，达不到多态的效果。\n同样，进入基类析构函数时，对象也是基类类型。C++中派生类在构造时会先调用基类的构造函数再调用派生类的构造函数，析构时则相反，先调用派生类的析构函数再调用基类的析构函数。一旦派生类析构函数运行，这个对象的派生类数据成员就被视为未定义的值，所以 C++ 就将它们视为不再存在。假设一个派生类的对象进行析构，首先调用了派生类的析构，然后再调用基类的析构时，遇到了一个虚函数，这个时候有两种选择：")]),t._v(" "),_("ol",[_("li",[t._v("编译器调用这个虚函数的基类版本，那么虚函数则失去了运行时调用正确版本的意义；")]),t._v(" "),_("li",[t._v("编译器调用这个虚函数的派生类版本，但是此时对象的派生类部分已经完成析构，"),_("code",[t._v("数据成员就被视为未定义的值")]),t._v("，这个函数调用会导致未知行为。")])]),t._v(" "),_("h3",{attrs:{id:"虚函数-virtual-可以是内联函数-inline-吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#虚函数-virtual-可以是内联函数-inline-吗"}},[t._v("#")]),t._v(" 虚函数（virtual）可以是内联函数（inline）吗？")]),t._v(" "),_("p",[t._v("虚函数可以是内联函数，但内联是向编译器建议内联，而虚函数的多态性在运行期，编译器无法知道运行期调用哪个代码，因此虚函数表现为多态性时（运行期）不可以内联。inline virtual 唯一可以内联的时候是：编译器知道所调用的对象是哪个类（如 Base::who()），这只有在编译器具有实际对象而不是对象的指针或引用时才会发生。")]),t._v(" "),_("h3",{attrs:{id:"虚继承"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#虚继承"}},[t._v("#")]),t._v(" 虚继承")]),t._v(" "),_("p",[t._v("虚继承用于解决多继承条件下的菱形继承问题（浪费存储空间、存在二义性）。")]),t._v(" "),_("p",[t._v("底层实现原理与编译器相关，一般通过虚基类指针和虚基类表实现，每个虚继承的子类都有一个虚基类指针（占用一个指针的存储空间，4 字节）和虚基类表（不占用类对象的存储空间）（需要强调的是，虚基类依旧会在子类里面存在拷贝，只是仅仅最多存在一份而已，并不是不在子类里面了）；当虚继承的子类被当做父类继承时，虚基类指针也会被继承。")]),t._v(" "),_("p",[t._v("实际上，vbptr 指的是虚基类表指针（virtual base table pointer），该指针指向了一个虚基类表（virtual table），虚表中记录了虚基类与本类的偏移地址；通过偏移地址，这样就找到了虚基类成员，而虚继承也不用像普通多继承那样维持着公共基类（虚基类）的两份同样的拷贝，节省了存储空间。")]),t._v(" "),_("h2",{attrs:{id:"其它"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),_("h3",{attrs:{id:"c-源文件从文本到可执行文件经历的过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#c-源文件从文本到可执行文件经历的过程"}},[t._v("#")]),t._v(" C++源文件从文本到可执行文件经历的过程")]),t._v(" "),_("ol",[_("li",[t._v("预处理阶段：对源代码文件中文件包含关系（头文件）、预编译语句（宏定义）进行分析和替换，生成预编译文件（"),_("code",[t._v(".i")]),t._v("文件）。")]),t._v(" "),_("li",[t._v("编译阶段：将经过预处理后的预编译文件转换成特定汇编代码，生成汇编文件（"),_("code",[t._v(".s")]),t._v("文件）。")]),t._v(" "),_("li",[t._v("汇编阶段：将编译阶段生成的汇编文件转化成机器码，生成可重定位目标文件 （"),_("code",[t._v(".o")]),t._v("或"),_("code",[t._v(".obj")]),t._v("文件）。")]),t._v(" "),_("li",[t._v("链接阶段：将多个目标文件及所需要的库连接成最终的可执行目标文件（"),_("code",[t._v(".out")]),t._v("或"),_("code",[t._v(".exe")]),t._v("文件）。")])]),t._v(" "),_("h3",{attrs:{id:"c-是不是类型安全的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#c-是不是类型安全的"}},[t._v("#")]),t._v(" C++是不是类型安全的？")]),t._v(" "),_("p",[t._v("不是。两个不同类型的指针之间可以强制转换")]),t._v(" "),_("h3",{attrs:{id:"main-函数执行以前-还会执行什么代码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#main-函数执行以前-还会执行什么代码"}},[t._v("#")]),t._v(" main 函数执行以前，还会执行什么代码？")]),t._v(" "),_("p",[t._v("全局对象的构造函数会在 main 函数之前执行。")]),t._v(" "),_("h3",{attrs:{id:"运行时类型信息-rtti"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#运行时类型信息-rtti"}},[t._v("#")]),t._v(" 运行时类型信息 （RTTI）")]),t._v(" "),_("ol",[_("li",[t._v("dynamic_cast 用于多态类型的转换")]),t._v(" "),_("li",[t._v("typeid 运算符允许在运行时确定对象的类型，并 返回一个 type_info 对象的引用。typeid 只能获取对象的实际类型，而且如果想通过基类的指针获得派生类的数据类型，基类必须带有虚函数。")]),t._v(" "),_("li",[t._v("type_info 类描述编译器在程序中生成的类型信息。 此类的对象可以有效存储指向类型的名称的指针。 type_info 类还可存储适合比较两个类型是否相等或比较其排列顺序的编码值。 类型的编码规则和排列顺序是未指定的，并且可能因程序而异。")])])])}),[],!1,null,null,null);v.default=a.exports}}]);