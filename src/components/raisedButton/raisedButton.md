# RaisedButton

## 属性

名称 | 类型 | 默认值 | 描述
---- | ---- | ------- | -----------
backgroundColor | String || 按钮颜色
buttonStyle | Object || 按钮内联样式
className | String || 按钮外部class属性
disabled | Boolean | false | 按钮是否禁用
disabledBackgroundColor | String || 按钮禁用后的颜色
disabledLabelColor | String || 按钮禁用后的字体颜色
fullWidth | Boolean | false | 按钮长度是否充满整父元素
href | String || 按钮点击后的外部链接
label | String || 按钮名称
labelColor | String || 按钮名称颜色
labelStyle | Object || 按钮名称内联样式
overlayStyle | Object || 按钮按下显示的遮罩层内联样式
rippleStyle | Object || 按钮按下显示的水波效果内联样式
primary | Boolean | false | 是否使用primary样式
secondary | Boolean | false | 是否使用secondary样式

## 跟其他组件结合使用
### Icon

* Button组件可以和Icon组件结合使用。
* Icon组件可以通过具名slot的方法插入Button名称的前后。
* slotNames: ['before', 'after']

例：

    <raised-button>
      // 图标会实例在按钮名称前
      <icon slot="before"></icon>

      // 图标会实例在按钮名称后
      <icon slot="after"></icon>
    </raised-button>
