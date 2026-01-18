# Alpha Barber Beauty - Site Web Professionnel

Site web moderne et responsive pour le salon de coiffure Alpha Barber Beauty situé à Malakoff.

## 🌟 Caractéristiques

- **Design Premium** : Thème noir et or élégant
- **Bilingue** : Support français et anglais
- **Responsive** : Adapté à tous les écrans (mobile, tablette, desktop)
- **Animations** : Effets visuels modernes et fluides
- **Performance** : Optimisé pour le chargement rapide

## 📁 Structure du Projet

```
alphabarber-website/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── images/              # Ajouter vos images ici
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── Services.js
│   │   ├── Gallery.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── context/
│   │   └── LanguageContext.js
│   ├── data/
│   │   └── translations.js
│   ├── styles/
│   │   ├── global.css
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── Services.css
│   │   ├── Gallery.css
│   │   ├── About.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.js
│   └── index.js
└── package.json
```

## 🚀 Installation

1. **Installer les dépendances :**
   ```bash
   npm install
   ```

2. **Lancer le serveur de développement :**
   ```bash
   npm start
   ```

3. **Créer la version de production :**
   ```bash
   npm run build
   ```

## 🖼️ Ajouter vos Images

Les placeholders sont prêts pour vos images. Pour les remplacer :

### Hero Section
Dans `src/components/Hero.js`, remplacez le placeholder par :
```jsx
<img src="/images/hero-image.jpg" alt="Alpha Barber" />
```

### Galerie
Dans `src/components/Gallery.js`, ajoutez vos images dans le tableau `galleryItems` :
```jsx
{ id: 1, image: '/images/gallery-1.jpg', title: 'Coupe Classique' }
```

### Section About
Dans `src/components/About.js`, remplacez le placeholder par votre image du salon.

### Carte Google Maps
Dans `src/components/Contact.js`, remplacez le placeholder par une iframe Google Maps :
```jsx
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!..."
  width="100%" 
  height="100%" 
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  title="Alpha Barber Location"
></iframe>
```

## 📞 Informations du Salon

Les informations sont centralisées dans `src/data/translations.js` :
- **Adresse** : 28 Bd de Stalingrad, 92240 Malakoff
- **Téléphone** : 01 75 32 35 77
- **Horaires** : Tous les jours 10h - 20h
- **Instagram** : @alphabarber_beauty

## 🎨 Personnalisation des Couleurs

Les couleurs sont définies dans `src/styles/global.css` :
```css
:root {
  --color-primary: #FFD700;      /* Or */
  --color-secondary: #000000;    /* Noir */
  --color-primary-light: #FFE55C;
  --color-primary-dark: #CCB000;
}
```

## 💰 Tarifs

Les tarifs sont modifiables dans `src/data/translations.js` dans l'objet `prices`.

## 🌐 Traductions

Pour modifier les textes, éditez `src/data/translations.js` :
- `fr` : Textes en français
- `en` : Textes en anglais

## 📱 Responsive Design

Le site est optimisé pour :
- Mobile : < 576px
- Tablette : 576px - 992px
- Desktop : > 992px

## ✨ Animations

- Fade in/out sur le scroll
- Hover effects sur les cartes
- Carousel automatique dans la galerie
- Animation du logo et de la navigation

## 📄 Licence

© 2024 Alpha Barber Beauty. Tous droits réservés.

---

Développé avec ❤️ pour Alpha Barber Beauty
# alphabarber
