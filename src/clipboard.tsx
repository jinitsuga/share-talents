async function copyText(text: string) {
  navigator.clipboard
    .writeText(text)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));
}

export { copyText };
