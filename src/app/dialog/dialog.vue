<template lang="pug">
div
  raisedButton(
    :label="raisedButtons[0].label",
    @onClick="onClick"
  )
  f-dialog(
    :open="dialogs[0].open",
    :title="dialogs[0].title",
    :text="dialogs[0].text",
    :cancelBtnLabel="dialogs[0].cancelBtnLabel",
    :confirmBtnLabel="dialogs[0].confirmBtnLabel",
    @maskOnClick="maskOnClick",
    @cancelOnClick="cancelOnClick",
    @confirmOnClick="cancelOnClick"
  )
</template>

<script>
  import FDialog from 'components/dialog/dialog'
  import RaisedButton from 'components/raisedButton/raisedButton'

  export default {
    name: 'fDialogExample',
    data() {
      return {
        dialogs: [
          {
            open: false,
            title: 'Dialog Demo',
            text: 'Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!',
            cancelBtnShow: true,
            cancelBtnLabel: 'Cancel',
            confirmBtnShow: true,
            confirmBtnLabel: 'Confirm'
          }
        ],
        raisedButtons: [
          {
            label: 'Toggle Dialog'
          }
        ]
      }
    },
    methods: {
      onClick: function() {
        this.dialogs[0].open = !this.dialogs[0].open
      },
      maskOnClick: function() {
        this.dialogs[0].open = false
      },
      cancelOnClick: function() {
        this.dialogs[0].open = false
      }
    },
    components: {
      FDialog,
      RaisedButton
    }
  }
</script>
