(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{441:function(e,n,d){"use strict";d.r(n);var t=d(22),o=Object(t.a)({},(function(){var e=this,n=e.$createElement,d=e._self._c||n;return d("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[d("h1",{attrs:{id:"深入diff-算法-源码"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#深入diff-算法-源码"}},[e._v("#")]),e._v(" 深入diff 算法 源码")]),e._v(" "),d("ul",[d("li",[e._v("生成 vnode")]),e._v(" "),d("li",[e._v("patch 函数")]),e._v(" "),d("li",[e._v("patchVnode 函数")]),e._v(" "),d("li",[e._v("updateChildren 函数")])]),e._v(" "),d("h2",{attrs:{id:"生成-vnode"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#生成-vnode"}},[e._v("#")]),e._v(" 生成 vnode")]),e._v(" "),d("h3",{attrs:{id:"snabbdom-h"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#snabbdom-h"}},[e._v("#")]),e._v(" "),d("code",[e._v("snabbdom/h")])]),e._v(" "),d("div",{staticClass:"language- extra-class"},[d("pre",{pre:!0,attrs:{class:"language-text"}},[d("code",[e._v("import { h } from 'snabbdom/h'\n\nvar vnode = h('div', { style: { color: '#000' } }, [\n  h('h1', 'Headline'),\n  h('p', 'A paragraph'),\n])\n")])])]),d("p",[e._v("h方法：")]),e._v(" "),d("div",{staticClass:"language- extra-class"},[d("pre",{pre:!0,attrs:{class:"language-text"}},[d("code",[e._v("// h.ts\nexport function h (sel: any, b?: any, c?: any): VNode {\n  var data: VNodeData = {}\n  var children: any\n  var text: any\n  var i: number\n  if (c !== undefined) {\n    if (b !== null) {\n      data = b\n    }\n    if (is.array(c)) {\n      children = c\n    } else if (is.primitive(c)) {\n      text = c\n    } else if (c && c.sel) {\n      children = [c]\n    }\n  } else if (b !== undefined && b !== null) {\n    if (is.array(b)) {\n      children = b\n    } else if (is.primitive(b)) {\n      text = b\n    } else if (b && b.sel) {\n      children = [b]\n    } else { data = b }\n  }\n  if (children !== undefined) {\n    for (i = 0; i < children.length; ++i) {\n      if (is.primitive(children[i])) children[i] = vnode(undefined, undefined, undefined, children[i], undefined)\n    }\n  }\n  if (\n    sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g' &&\n    (sel.length === 3 || sel[3] === '.' || sel[3] === '#')\n  ) {\n    addNS(data, children, sel)\n  }\n  // 注意：这里返回了 vnode 这个方法，我们找一下 vnode()\n  return vnode(sel, data, children, text, undefined)\n};\n")])])]),d("p",[e._v("vnode方法：")]),e._v(" "),d("div",{staticClass:"language- extra-class"},[d("pre",{pre:!0,attrs:{class:"language-text"}},[d("code",[e._v("export function vnode (sel: string | undefined,\n  data: any | undefined,\n  children: Array<VNode | string> | undefined,\n  text: string | undefined,\n  elm: Element | Text | undefined): VNode {\n  const key = data === undefined ? undefined : data.key\n  return { sel, data, children, text, elm, key }\n}\n")])])]),d("p",[e._v("看的出来 vnode 其实就是整个了一个对象返回给了 h 函数，所以h函数也会返回这个vnode返回出去的对象。")]),e._v(" "),d("h3",{attrs:{id:"snabbdom-tovnode"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#snabbdom-tovnode"}},[e._v("#")]),e._v(" "),d("code",[e._v("snabbdom/tovnode")])]),e._v(" "),d("div",{staticClass:"language- extra-class"},[d("pre",{pre:!0,attrs:{class:"language-text"}},[d("code",[e._v("import { init } from 'snabbdom/init'\nimport { classModule } from 'snabbdom/modules/class'\nimport { propsModule } from 'snabbdom/modules/props'\nimport { styleModule } from 'snabbdom/modules/style'\nimport { eventListenersModule } from 'snabbdom/modules/eventlisteners'\nimport { h } from 'snabbdom/h' // helper function for creating vnodes\nimport { toVNode } from 'snabbdom/tovnode'\n\nvar patch = init([ // Init patch function with chosen modules\n  classModule, // makes it easy to toggle classes\n  propsModule, // for setting properties on DOM elements\n  styleModule, // handles styling on elements with support for animations\n  eventListenersModule, // attaches event listeners\n])\n\nvar newVNode = h('div', { style: { color: '#000' } }, [\n  h('h1', 'Headline'),\n  h('p', 'A paragraph'),\n])\n\npatch(toVNode(document.querySelector('.container')), newVNode)\n")])])]),d("h2",{attrs:{id:"patch-函数"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#patch-函数"}},[e._v("#")]),e._v(" patch 函数")]),e._v(" "),d("p",[e._v("patch 函数")]),e._v(" "),d("div",{staticClass:"language- extra-class"},[d("pre",{pre:!0,attrs:{class:"language-text"}},[d("code",[e._v("return function patch (oldVnode: VNode | Element, vnode: VNode): VNode {\n    let i: number, elm: Node, parent: Node\n    const insertedVnodeQueue: VNodeQueue = []\n    // 执行 pre hook（lifecycle） \n    for (i = 0; i < cbs.pre.length; ++i) cbs.pre[i]()\n  \n\t\t// 第一个参数不是 vnode，比如是个dom 元素 ： patch(container, newVnode)\n    if (!isVnode(oldVnode)) {\n      // 创建一个空的 vnode, 关联到这个DOM元素\n      oldVnode = emptyNodeAt(oldVnode)\n    }\n\t\t// 相同的 vnode key 和 sel 都相等\n    if (sameVnode(oldVnode, vnode)) {\n      patchVnode(oldVnode, vnode, insertedVnodeQueue)\n    } \n  \t// 不同的 vnode，直接删掉重建\n  \telse {\n      elm = oldVnode.elm!\n      parent = api.parentNode(elm) as Node\n\t\t\t// 重建\n      createElm(vnode, insertedVnodeQueue)\n\n      if (parent !== null) {\n        api.insertBefore(parent, vnode.elm!, api.nextSibling(elm))\n        removeVnodes(parent, [oldVnode], 0, 0)\n      }\n    }\n\n    for (i = 0; i < insertedVnodeQueue.length; ++i) {\n      insertedVnodeQueue[i].data!.hook!.insert!(insertedVnodeQueue[i])\n    }\n    for (i = 0; i < cbs.post.length; ++i) cbs.post[i]()\n    return vnode\n  }\n\n\n// emptyNodeAt 也是返回一个 vnode 对象，就是将传入的这个 elm 与做出来的 vnode 做绑定\nfunction emptyNodeAt (elm: Element) {\n    const id = elm.id ? '#' + elm.id : ''\n    const c = elm.className ? '.' + elm.className.split(' ').join('.') : ''\n    return vnode(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm)\n  }\n")])])]),d("p",[e._v("sameVnode 方法（证明形同的selector、key， 时间复杂度为 O(n)）")]),e._v(" "),d("div",{staticClass:"language- extra-class"},[d("pre",{pre:!0,attrs:{class:"language-text"}},[d("code",[e._v("function sameVnode (vnode1: VNode, vnode2: VNode): boolean {\n  // key 和 sel 都相等\n  // 如果不传key 呢？ undefined  === undefined // true\n  return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel\n}\n")])])]),d("h2",{attrs:{id:"patchvnode-vnode-对比"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#patchvnode-vnode-对比"}},[e._v("#")]),e._v(" patchVnode - vnode 对比")]),e._v(" "),d("p",[e._v("patchVnode")]),e._v(" "),d("div",{staticClass:"language- extra-class"},[d("pre",{pre:!0,attrs:{class:"language-text"}},[d("code",[e._v("function patchVnode (oldVnode: VNode, vnode: VNode, insertedVnodeQueue: VNodeQueue) {\n    // 执行 prepatch hook\n    const hook = vnode.data?.hook\n    hook?.prepatch?.(oldVnode, vnode)\n    // 设置 vnode.elem\n    const elm = vnode.elm = oldVnode.elm!\n    // 旧 children\n    const oldCh = oldVnode.children as VNode[]\n    // 新 children\n    const ch = vnode.children as VNode[]\n    \n    if (oldVnode === vnode) return\n    // hook 相关\n    if (vnode.data !== undefined) {\n      for (let i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode)\n      vnode.data.hook?.update?.(oldVnode, vnode)\n    }\n    // vnode.text === undefined (vnode.children(一般有值) !== undefined)\n    if (isUndef(vnode.text)) {\n      // 新旧都有 children\n      if (isDef(oldCh) && isDef(ch)) {\n        // 对比两个children\n        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue)\n      // 新 children 有，旧children 无，（旧 text 有）\n      } else if (isDef(ch)) {\n        // 清空 text\n        if (isDef(oldVnode.text)) api.setTextContent(elm, '')\n        // 添加 children\n        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)\n      // 旧 child 有， 新 child 无\n      } else if (isDef(oldCh)) {\n        // 移除 children\n        removeVnodes(elm, oldCh, 0, oldCh.length - 1)\n      // 旧 text 有\n      } else if (isDef(oldVnode.text)) {\n        // 清空\n        api.setTextContent(elm, '')\n      }\n      \n    // else : vnode.text !== undefined (vnode.children 无值)\n    } else if (oldVnode.text !== vnode.text) {\n      // 移除 旧 ch\n      if (isDef(oldCh)) {\n        removeVnodes(elm, oldCh, 0, oldCh.length - 1)\n      }\n      // 然后再设置新的 text\n      api.setTextContent(elm, vnode.text!)\n    }\n    hook?.postpatch?.(oldVnode, vnode)\n  }\n")])])]),d("p",[e._v("addVnodes方法")]),e._v(" "),d("div",{staticClass:"language- extra-class"},[d("pre",{pre:!0,attrs:{class:"language-text"}},[d("code",[e._v("function addVnodes (\n    parentElm: Node,\n    before: Node | null,\n    vnodes: VNode[],\n    startIdx: number,\n    endIdx: number,\n    insertedVnodeQueue: VNodeQueue\n  ) {\n    for (; startIdx <= endIdx; ++startIdx) {\n      const ch = vnodes[startIdx]\n      if (ch != null) {\n        api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before)\n      }\n    }\n  }\n")])])]),d("p",[e._v("removeVnodes 方法")]),e._v(" "),d("div",{staticClass:"language- extra-class"},[d("pre",{pre:!0,attrs:{class:"language-text"}},[d("code",[e._v("function removeVnodes (parentElm: Node,\n    vnodes: VNode[],\n    startIdx: number,\n    endIdx: number): void {\n    for (; startIdx <= endIdx; ++startIdx) {\n      let listeners: number\n      let rm: () => void\n      const ch = vnodes[startIdx]\n      if (ch != null) {\n        if (isDef(ch.sel)) {\n          invokeDestroyHook(ch) // hook 操作 destroy\n          // 移除 DOM 元素\n          listeners = cbs.remove.length + 1\n          rm = createRmCb(ch.elm!, listeners)\n          for (let i = 0; i < cbs.remove.length; ++i) cbs.remove[i](ch, rm)\n          const removeHook = ch?.data?.hook?.remove\n          if (isDef(removeHook)) {\n            removeHook(ch, rm)\n          } else {\n            rm()\n          }\n        } else { // Text node\n          api.removeChild(parentElm, ch.elm!)\n        }\n      }\n    }\n  }\n")])])]),d("h2",{attrs:{id:"updatechildren-对比两个children"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#updatechildren-对比两个children"}},[e._v("#")]),e._v(" updateChildren - 对比两个children")]),e._v(" "),d("p",[e._v("updateChildren 函数")]),e._v(" "),d("div",{staticClass:"language- extra-class"},[d("pre",{pre:!0,attrs:{class:"language-text"}},[d("code",[e._v("function updateChildren (parentElm: Node,\n    oldCh: VNode[],\n    newCh: VNode[],\n    insertedVnodeQueue: VNodeQueue) {\n    let oldStartIdx = 0\n    let newStartIdx = 0\n    let oldEndIdx = oldCh.length - 1\n    let oldStartVnode = oldCh[0]\n    let oldEndVnode = oldCh[oldEndIdx]\n    let newEndIdx = newCh.length - 1\n    let newStartVnode = newCh[0]\n    let newEndVnode = newCh[newEndIdx]\n    let oldKeyToIdx: KeyToIndexMap | undefined\n    let idxInOld: number\n    let elmToMove: VNode\n    let before: any\n\n    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {\n      if (oldStartVnode == null) {\n        oldStartVnode = oldCh[++oldStartIdx] // Vnode might have been moved left\n      } else if (oldEndVnode == null) {\n        oldEndVnode = oldCh[--oldEndIdx]\n      } else if (newStartVnode == null) {\n        newStartVnode = newCh[++newStartIdx]\n      } else if (newEndVnode == null) {\n        newEndVnode = newCh[--newEndIdx]\n        // 开始和开始去对比，sameVnode 返回 key & sel 是否相同，加快了 updateChildren的对比高效\n      } else if (sameVnode(oldStartVnode, newStartVnode)) {\n        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue)\n        oldStartVnode = oldCh[++oldStartIdx]\n        newStartVnode = newCh[++newStartIdx]\n        // 结束和结束去对比\n      } else if (sameVnode(oldEndVnode, newEndVnode)) {\n        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue)\n        oldEndVnode = oldCh[--oldEndIdx]\n        newEndVnode = newCh[--newEndIdx]\n        // 开始和结束对比\n      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right\n        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue)\n        api.insertBefore(parentElm, oldStartVnode.elm!, api.nextSibling(oldEndVnode.elm!))\n        oldStartVnode = oldCh[++oldStartIdx]\n        newEndVnode = newCh[--newEndIdx]\n        // 结束和开始去对比\n      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left\n        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue)\n        api.insertBefore(parentElm, oldEndVnode.elm!, oldStartVnode.elm!)\n        oldEndVnode = oldCh[--oldEndIdx]\n        newStartVnode = newCh[++newStartIdx]\n        // 以上四个都没命中\n      } else {\n        if (oldKeyToIdx === undefined) {\n          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)\n        }\n        // 拿 新节点的key 能否对应上 OldCh中的某个节点的key 是否能对应上\n        idxInOld = oldKeyToIdx[newStartVnode.key as string]\n        // 没对应上\n        if (isUndef(idxInOld)) { // New element 重建\n          api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm!)\n        // 对应上了\n        } else {\n          // 对应上 key 的节点\n          elmToMove = oldCh[idxInOld]\n          // sel 是否相等 （sameVnode 的条件）\n          if (elmToMove.sel !== newStartVnode.sel) {\n            // New Element\n            api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm!)\n            // sel & key 相等\n          } else {\n            // 相等之后去 patch vnode\n            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue)\n            oldCh[idxInOld] = undefined as any\n            api.insertBefore(parentElm, elmToMove.elm!, oldStartVnode.elm!)\n          }\n        }\n        newStartVnode = newCh[++newStartIdx]\n      }\n    }\n    if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {\n      if (oldStartIdx > oldEndIdx) {\n        before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm\n        addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)\n      } else {\n        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)\n      }\n    }\n  }\n")])])]),d("p",[d("a",{attrs:{href:"https://github.com/tiantingrui/up_2021/blob/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/Vue%E3%80%81React%E3%80%81Webpack/Vue%E5%8E%9F%E7%90%86/img/image-20210118110138838.png",target:"_blank",rel:"noopener noreferrer"}},[d("img",{attrs:{src:"https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/Vue%E3%80%81React%E3%80%81Webpack/Vue%E5%8E%9F%E7%90%86/img/image-20210118110138838.png",alt:"image-20210118110138838"}}),d("OutboundLink")],1)]),e._v(" "),d("p",[d("a",{attrs:{href:"https://github.com/tiantingrui/up_2021/blob/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/Vue%E3%80%81React%E3%80%81Webpack/Vue%E5%8E%9F%E7%90%86/img/image-20210118110231549.png",target:"_blank",rel:"noopener noreferrer"}},[d("img",{attrs:{src:"https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/Vue%E3%80%81React%E3%80%81Webpack/Vue%E5%8E%9F%E7%90%86/img/image-20210118110231549.png",alt:"image-20210118110231549"}}),d("OutboundLink")],1)]),e._v(" "),d("p",[d("a",{attrs:{href:"https://github.com/tiantingrui/up_2021/blob/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/Vue%E3%80%81React%E3%80%81Webpack/Vue%E5%8E%9F%E7%90%86/img/image-20210118111602827.png",target:"_blank",rel:"noopener noreferrer"}},[d("img",{attrs:{src:"https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/Vue%E3%80%81React%E3%80%81Webpack/Vue%E5%8E%9F%E7%90%86/img/image-20210118111602827.png",alt:"image-20210118111602827"}}),d("OutboundLink")],1)]),e._v(" "),d("h2",{attrs:{id:"diff-算法总结"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#diff-算法总结"}},[e._v("#")]),e._v(" diff 算法总结")]),e._v(" "),d("ul",[d("li",[e._v("patchVnode")]),e._v(" "),d("li",[e._v("addVnodes removeVnodes")]),e._v(" "),d("li",[e._v("updateChildren (key 的重要性) -- v-for中为什么使用 key")])]),e._v(" "),d("h2",{attrs:{id:"vdom-和-diff-总结"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#vdom-和-diff-总结"}},[e._v("#")]),e._v(" vdom 和 diff 总结")]),e._v(" "),d("ul",[d("li",[e._v("细节不重要， updateChildren 的过程也不重要，不要深究")]),e._v(" "),d("li",[e._v("vdom核心概念很重要：h、vnode、patch、diff、key等")]),e._v(" "),d("li",[e._v("vdom 存在的价值更加重要：数据驱动视图，控制DOM操作")])])])}),[],!1,null,null,null);n.default=o.exports}}]);