interface IDialogOptions {
  title?: string;
  message: string;
  confirmCaption?: string;
  cancelCaption?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export default function createDialog({
  message,
  onCancel,
  onConfirm,
  title,
  cancelCaption = 'No',
  confirmCaption = 'Sí',
}: IDialogOptions) {
  const backdrop = document.createElement('dialog');
  const dialog = document.createElement('div');
  const dialogHeader = document.createElement('header');
  const dialogFooter = document.createElement('footer');
  const dialogContent = document.createElement('div')
  const confirmButton = document.createElement('button');
  const cancelButton = document.createElement('button');

  dialogHeader.innerHTML = title ? `<h4>${title}</h4>` : '';
  dialog.appendChild(dialogHeader);
  
  dialog.classList.add('confirm-dialog');
  // dialog.innerText = message;
  dialog.appendChild(dialogContent);
  dialogContent.innerHTML = `<p>${message}</p>`
  dialogFooter.classList.add('confirm-dialog__footer');

  confirmButton.innerText = confirmCaption;
  confirmButton.classList.add('button');
  confirmButton.classList.add('confirm-dialog__button');
  confirmButton.setAttribute('data-mode', 'filled');
  confirmButton.onclick = () => {
    onConfirm?.();
    document.body.removeChild(backdrop);
  };

  cancelButton.innerText = cancelCaption;
  cancelButton.classList.add('button');
  cancelButton.setAttribute('data-mode', 'text');
  cancelButton.onclick = () => {
    
    onCancel?.();
    document.body.removeChild(backdrop);
  };

  dialogFooter.appendChild(cancelButton);
  dialogFooter.appendChild(confirmButton);
  dialog.appendChild(dialogFooter);
  backdrop.appendChild(dialog);

  backdrop.open = true;
  document.body.appendChild(backdrop);
}
