const information = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg>`;
const success = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l2 2l4 -4" /></svg>`;
const error = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 10l4 4m0 -4l-4 4" /></svg>`;

const icon = {
  success,
  error,
  information,
};

interface INotificationOptions {
  message: string;
  description?: string;
  type?: 'success' | 'error' | 'information';
  duration?: number;
}

export default function createNotification({
  duration = 3000,
  message,
  type = 'success',
  description,
}: INotificationOptions): void {
  const toast = document.createElement('div');
  toast.className = `toast | toast-${type}`;
  toast.innerHTML = `
    <header class="toast__header">
      ${icon[type]}
      <h3 class="toast__message">${message}</h3>
    </header>
    ${description ? `<p>${description}</p>` : ``}
  `;

  document.body.appendChild(toast);

  setTimeout(() => document.body.removeChild(toast), duration);
}
