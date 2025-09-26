declare interface Window {
  turnstile?: {
    getResponse: () => string | undefined;
    reset: () => void;
  };
}


