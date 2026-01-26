# Alpha Barber Beauty - Mise à jour avec Section Vidéo

## 🎬 Nouveautés ajoutées

### 1. Composant VideoShowcase
Un nouveau composant `VideoShowcase.js` a été créé avec :
- **Lazy loading intelligent** : La vidéo ne se charge que lorsque l'utilisateur approche de la section (200px avant)
- **Intersection Observer** : Détecte quand la section devient visible
- **Preload "none"** : La vidéo n'est pas chargée au démarrage de la page
- **Placeholder animé** : Un loader s'affiche pendant le chargement
- **Bouton play/pause** stylé avec le design doré du site
- **Design responsive** : S'adapte à toutes les tailles d'écran

### 2. SEO Optimisé (index.html)
Le fichier `index.html` a été complètement refait avec :
- **Meta tags complets** : description, keywords, robots
- **Open Graph & Twitter Cards** : Partage optimisé sur les réseaux sociaux
- **Geo tags** : Référencement local pour Malakoff
- **Schema.org Structured Data** :
  - `BarberShop` : Informations complètes sur le commerce
  - `BreadcrumbList` : Navigation structurée
  - `VideoObject` : Référencement de la vidéo
- **Balises hreflang** : Support multilingue FR/EN
- **Preconnect** : Chargement optimisé des polices

## 📁 Fichiers à placer

### Dans `/public/video/`
- `showcase.mp4` - Votre vidéo de 53MB

### Dans `/public/images/`
- `video-poster.jpg` - Image d'aperçu de la vidéo (capture d'écran du début de la vidéo)
- `og-image.jpg` - Image pour le partage social (1200x630px recommandé)

## 🔧 Installation

1. Remplacez le fichier `public/index.html` par le nouveau
2. Copiez le dossier `src/` complet pour écraser l'existant
3. Créez le dossier `public/video/` et placez-y votre vidéo `showcase.mp4`
4. Créez une image poster `public/images/video-poster.jpg`
ajoutée que quand nécessaire

### Score Google PageSpeed attendu
- La vidéo n'affectera pas le LCP (Largest Contentful Paint)
- Le FCP (First Contentful Paint) reste rapide
- Le TBT (Total Blocking Time) n'est pas impacté

## 📱 Traductions ajoutées

Les traductions FR et EN ont été ajoutées pour :
- `video.subtitle`
- `video.title`
- `video.titleHighlight`
- `video.description`
- `video.loading`
- `video.play`
- `video.pause`
- `video.ariaLabel`
- `video.feature1`
- `video.feature2`
- `video.feature3`

## 🎨 Design

Le composant suit exactement le même style que le reste du site :
- Couleurs dorées et noires
- Bordures décoratives
- Animations fluides
- Effets de hover
- Coins décoratifs style barbershop

## ✅ Checklist avant déploiement

- [ ] Placer `showcase.mp4` dans `/public/video/`
- [ ] Créer `video-poster.jpg` (première frame de la vidéo)
- [ ] Créer `og-image.jpg` pour les réseaux sociaux
- [ ] Vérifier l'URL canonique dans index.html
- [ ] Tester sur mobile
- [ ] Vérifier le score PageSpeed après déploiement
