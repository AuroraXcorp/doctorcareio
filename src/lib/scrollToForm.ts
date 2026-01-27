export const scrollToFormAndFocus = (e?: React.MouseEvent) => {
  if (e) e.preventDefault();
  
  const formSection = document.getElementById('form-section');
  const nameInput = document.getElementById('form-name-input') as HTMLInputElement;
  
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Focus the input after scroll animation completes
    setTimeout(() => {
      if (nameInput) {
        nameInput.focus();
      }
    }, 600);
  }
};
