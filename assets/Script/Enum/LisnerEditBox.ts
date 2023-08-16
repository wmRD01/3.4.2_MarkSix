export enum LisnerEditBox {

    /**EditBox_End 結束編輯EditBox
     * 
     */
    EditBox_End = "editing-did-ended",
    /**EditBox_Start 開始編輯EditBox
     * 
     */
    EditBox_Start = "editing-did-began",
    /**EditBox_Return 玩家按下返回鍵(手機)
     * 
     */
    EditBox_Return = "editing-return",
    /**EditBox_Editing 玩家正在編輯時監聽每個文字
     * 
     */
    EditBox_Editing = "text-changed",
}