// Clinic facts and site-wide links shared by every page.
export const IMG = '/images/photos/';

export const CONTACT = {
  phone: '81 8451 0533',
  tel: '+528184510533',
  whatsapp: '528184510533',
  address: 'Carr. Nacional 1109-B-121, Col. Los Rodríguez, 67300 Santiago, N.L.',
  maps: 'https://www.google.com/maps/search/?api=1&query=Well+Derma+Carr.+Nacional+1109-B-121+Los+Rodr%C3%ADguez+67300+Santiago+N.L.',
  mapsEmbed: 'https://www.google.com/maps?q=' + encodeURIComponent('Well Derma, Carr. Nacional 1109-B-121, Los Rodríguez, 67300 Santiago, N.L.') + '&z=16&hl=es&output=embed',
  facebook: 'https://www.facebook.com/welldermamx',
};

export const whatsappHref = (msg) => 'https://wa.me/' + CONTACT.whatsapp + '?text=' + encodeURIComponent(msg);

const PAGES = [
  { id: 'inicio', label: 'Inicio', href: '/' },
  { id: 'tratamientos', label: 'Tratamientos', href: '/#tratamientos' },
  { id: 'doctoras', label: 'Doctoras', href: '/doctoras/' },
  { id: 'galeria', label: 'Galería', href: '/galeria/' },
  { id: 'contacto', label: 'Contacto', href: '/#contacto' },
];

// On Inicio the home sections are same-page anchors; on the other pages the current page links to its own section.
export function navFor(page) {
  return PAGES.map((p) => {
    if (page === 'inicio' && ['inicio', 'tratamientos', 'contacto'].includes(p.id)) return { ...p, href: '#' + p.id };
    if (p.id === page) return { ...p, href: '#' + p.id, current: true };
    return p;
  });
}
