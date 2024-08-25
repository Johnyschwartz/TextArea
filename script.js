var messageInput = document.getElementById('message');
var charCount = document.getElementById('charCount');
var maxChars = messageInput.getAttribute('maxlength');

messageInput.addEventListener('input', () => {
    const currentLength = messageInput.value.length;
    charCount.textContent = currentLength;
});