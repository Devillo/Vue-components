<template>
  <div class="textField-content">
    <h4>Simple Example</h4>
    <text-field
      :underlineShow=false
      :hintText="textFieldOne.hintText"
      :value="textFieldOne.value"
      :floatingLabelFixed="textFieldOne.floatingLabelFixed"
      @onChange="onChange">
    </text-field>
    <br>
    <text-field
      :floatingLabelText="textFieldOne.floatingLabelText"
      :hintText="textFieldOne.hintText"
      value=""
      :floatingLabelFixed="textFieldOne.floatingLabelFixed"
      @onChange="onChange">
    </text-field>
    <h4>Other Example</h4>
    <text-field
      fullWidth
      :hintText="textFieldOne.hintText"
      :value="textFieldOne.value"
      :floatingLabelFixed="textFieldOne.floatingLabelFixed"
      @onChange="onChange">
    </text-field>
    <br>
    <text-field
      :floatingLabelText="textFieldOne.floatingLabelText"
      :hintText="textFieldOne.hintText"
      :value="textFieldOne.value"
      :floatingLabelFixed="textFieldOne.floatingLabelFixed"
      :floatingLabelFocusStyle="textFieldOne.floatingLabelFocusStyle"
      :floatingLabelShrinkStyle="textFieldOne.floatingLabelShrinkStyle"
      :floatingLabelStyle='{"font-weight": "800"}'
      :hintStyle='{"color": "red"}'
      @onChange="onChange">
    </text-field>
    <br>
    <text-field
      :floatingLabelText="textFieldOne.floatingLabelText"
      disabled
      :hintText="textFieldOne.hintText"
      :underlineDisabledStyle='{"border-bottom-color": "red"}'
      value=""
      :floatingLabelFixed="textFieldOne.floatingLabelFixed"
      @onChange="onChange">
      <div slot="error">aSASDDA</div>
    </text-field>
  </div>
</template>

<script>
  import TextField from 'components/textField/textField'

  export default {
    name: 'textFieldExample',
    data() {
      return {
        textFieldOne: {
          floatingLabelText: 'My Name',
          hintText: 'Default',
          value: 'YMH',
          floatingLabelFixed: true,
          floatingLabelFocusStyle: {
            "color": "red"
          },
          floatingLabelShrinkStyle: {
            "color": "blue"
          }
        }
      }
    },
    methods: {
      onChange: function(value) {
        //console.log(value)
      }
    },
    components: {
      TextField
    }
  }
</script>
