# TextField

## 属性

名称 | 类型 | 默认值 | 描述
---- | ---- | ---- | ---- |
className | String | | 根dom节点class样式
style | Object | | 根dom节点内联样式
disabled | Boolean | false | 是否禁用
floatingLabelFixed | Boolean | false | 小标题是否有浮动
floatingLabelFocusStyle | Object | | 小标题聚焦状态下的内联样式
floatingLabelShrinkStyle | Object | | 小标题收缩状态下的内联样式
floatingLabelStyle | Object | | 小标题内联样式
floatingLabelText | String | | 小标题内容
fullWidth | Boolean | false | 是否扩展到组件父dom的宽度
hintStyle | Object | | 提示内容内联样式
hintText | String | | 提示内容
id | String | | input id
inputStyle | Object | | input内联样式
multiLine | Boolean | false | 暂无
name | String | | input name
type | String ['text', 'password'] | text | input type
onChange | Function | | input change 回调事件.参数为当前value
onClick | Function | | 绑定在root上的click事件,为了某些组件只需要点击事件而不需要焦点
rows | Number | 1 | 暂无
rowsMax | Number | | 暂无
textareaStyle | Object | | 暂无
underlineDisabledStyle | Object | | 下划线禁用状态下的内联样式
underlineFocusStyle | Object | | 下划线聚焦状态下的内联样式
underlineShow | Boolean | true | 是否显示下划线
underlineStyle | Objecy | | 下划线内联样式
value | String | | input value

## slot

### error
error状况下的提示

例：

    <textField>
      <div class="aaa" slot="error">error</div>
    </textField>
