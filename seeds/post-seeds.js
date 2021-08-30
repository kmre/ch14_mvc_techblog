const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu velit id sapien mattis condimentum laoreet non neque. Ut sed massa eu mi vehicula sodales. Praesent tempor maximus dictum. Fusce magna velit, vehicula a fringilla eget, condimentum ac turpis. Quisque imperdiet scelerisque consectetur. Praesent a efficitur arcu, vitae faucibus neque. Ut finibus, nulla et ultricies semper, magna felis lacinia nisi, ac posuere augue metus ac ligula.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu velit id sapien mattis condimentum laoreet non neque. Ut sed massa eu mi vehicula sodales. Praesent tempor maximus dictum. Fusce magna velit, vehicula a fringilla eget, condimentum ac turpis. Quisque imperdiet scelerisque consectetur. Praesent a efficitur arcu, vitae faucibus neque. Ut finibus, nulla et ultricies semper, magna felis lacinia nisi, ac posuere augue metus ac ligula.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu velit id sapien mattis condimentum laoreet non neque. Ut sed massa eu mi vehicula sodales. Praesent tempor maximus dictum. Fusce magna velit, vehicula a fringilla eget, condimentum ac turpis. Quisque imperdiet scelerisque consectetur. Praesent a efficitur arcu, vitae faucibus neque. Ut finibus, nulla et ultricies semper, magna felis lacinia nisi, ac posuere augue metus ac ligula.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu velit id sapien mattis condimentum laoreet non neque. Ut sed massa eu mi vehicula sodales. Praesent tempor maximus dictum. Fusce magna velit, vehicula a fringilla eget, condimentum ac turpis. Quisque imperdiet scelerisque consectetur. Praesent a efficitur arcu, vitae faucibus neque. Ut finibus, nulla et ultricies semper, magna felis lacinia nisi, ac posuere augue metus ac ligula.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu velit id sapien mattis condimentum laoreet non neque. Ut sed massa eu mi vehicula sodales. Praesent tempor maximus dictum. Fusce magna velit, vehicula a fringilla eget, condimentum ac turpis. Quisque imperdiet scelerisque consectetur. Praesent a efficitur arcu, vitae faucibus neque. Ut finibus, nulla et ultricies semper, magna felis lacinia nisi, ac posuere augue metus ac ligula.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lectus orci, euismod a fringilla non, elementum et urna. Aliquam erat volutpat. Proin lobortis fringilla diam, a tristique nulla lobortis et. Morbi a sapien id velit consequat pretium non sit amet tortor. Vestibulum vitae augue vitae augue accumsan rhoncus. Proin interdum nisi lobortis, cursus felis at, rutrum massa. Sed mauris eros, condimentum ut nisi sed, varius efficitur quam.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu velit id sapien mattis condimentum laoreet non neque. Ut sed massa eu mi vehicula sodales. Praesent tempor maximus dictum. Fusce magna velit, vehicula a fringilla eget, condimentum ac turpis. Quisque imperdiet scelerisque consectetur. Praesent a efficitur arcu, vitae faucibus neque. Ut finibus, nulla et ultricies semper, magna felis lacinia nisi, ac posuere augue metus ac ligula.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lectus orci, euismod a fringilla non, elementum et urna. Aliquam erat volutpat. Proin lobortis fringilla diam, a tristique nulla lobortis et. Morbi a sapien id velit consequat pretium non sit amet tortor. Vestibulum vitae augue vitae augue accumsan rhoncus. Proin interdum nisi lobortis, cursus felis at, rutrum massa. Sed mauris eros, condimentum ut nisi sed, varius efficitur quam.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu pharetra tellus, quis rhoncus nulla. Donec fermentum nisl vel porta viverra. Ut dui mi, sodales in metus a, tincidunt accumsan lorem. In a libero eros. Vestibulum sed arcu magna. Aenean metus metus, malesuada consequat lectus sit amet, viverra ultrices velit. Vestibulum euismod vitae nulla vitae euismod. Mauris rhoncus sollicitudin risus in sollicitudin. Nunc tincidunt rhoncus neque, at varius tellus ultricies vel. Maecenas a varius enim, non dignissim lorem. Pellentesque vitae eros mollis, ultrices ante eu, aliquet tellus. Nulla ex mi, cursus ac iaculis eu, porttitor sed dui. Duis ultricies enim et velit porttitor blandit.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec mollis nisl, viverra lacinia dolor. In eu fermentum ante. Suspendisse potenti. Aliquam id lorem porta, pretium massa a, molestie nisl. Mauris tempus purus placerat, semper quam eu, porta sapien. Ut nec felis diam. Sed lorem massa, semper eu consectetur a, tincidunt id lorem. Integer eu libero dui. Maecenas congue mi eget lectus laoreet porta. Mauris ac molestie enim, ut rutrum magna. Sed euismod lobortis est ac scelerisque. Donec mattis tortor mi, congue egestas risus efficitur placerat.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec mollis nisl, viverra lacinia dolor. In eu fermentum ante. Suspendisse potenti. Aliquam id lorem porta, pretium massa a, molestie nisl. Mauris tempus purus placerat, semper quam eu, porta sapien. Ut nec felis diam. Sed lorem massa, semper eu consectetur a, tincidunt id lorem. Integer eu libero dui. Maecenas congue mi eget lectus laoreet porta. Mauris ac molestie enim, ut rutrum magna. Sed euismod lobortis est ac scelerisque. Donec mattis tortor mi, congue egestas risus efficitur placerat.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec mollis nisl, viverra lacinia dolor. In eu fermentum ante. Suspendisse potenti. Aliquam id lorem porta, pretium massa a, molestie nisl. Mauris tempus purus placerat, semper quam eu, porta sapien. Ut nec felis diam. Sed lorem massa, semper eu consectetur a, tincidunt id lorem. Integer eu libero dui. Maecenas congue mi eget lectus laoreet porta. Mauris ac molestie enim, ut rutrum magna. Sed euismod lobortis est ac scelerisque. Donec mattis tortor mi, congue egestas risus efficitur placerat.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec mollis nisl, viverra lacinia dolor. In eu fermentum ante. Suspendisse potenti. Aliquam id lorem porta, pretium massa a, molestie nisl. Mauris tempus purus placerat, semper quam eu, porta sapien. Ut nec felis diam. Sed lorem massa, semper eu consectetur a, tincidunt id lorem. Integer eu libero dui. Maecenas congue mi eget lectus laoreet porta. Mauris ac molestie enim, ut rutrum magna. Sed euismod lobortis est ac scelerisque. Donec mattis tortor mi, congue egestas risus efficitur placerat.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec mollis nisl, viverra lacinia dolor. In eu fermentum ante. Suspendisse potenti. Aliquam id lorem porta, pretium massa a, molestie nisl. Mauris tempus purus placerat, semper quam eu, porta sapien. Ut nec felis diam. Sed lorem massa, semper eu consectetur a, tincidunt id lorem. Integer eu libero dui. Maecenas congue mi eget lectus laoreet porta. Mauris ac molestie enim, ut rutrum magna. Sed euismod lobortis est ac scelerisque. Donec mattis tortor mi, congue egestas risus efficitur placerat.',
    user_id: 3
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
