export const scrollToFormAndFocus = (e?: React.MouseEvent) => {
  if (e) e.preventDefault();
  
  const heroSection = document.getElementById('hero');
  const nameInput = document.getElementById('hero-name-input') as HTMLInputElement;
  
  if (heroSection) {
    heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Focus the input after scroll animation completes
    setTimeout(() => {
      if (nameInput) {
        nameInput.focus();
      }
    }, 600);
  }
};
