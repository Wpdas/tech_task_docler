export const CHAT_TYPED_TEXT = 'CHAT_TYPED_TEXT';

export const updateTypedText = text => {
  return { type: CHAT_TYPED_TEXT, payload: { typedText: text } };
};
