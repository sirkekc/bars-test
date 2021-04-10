export interface Movie {
  uid: string;
  movieName: string;
  director: string;
  rating: number;
  year: string;
  imageSrc: string;
  descr: string;
  fav?: boolean;
}

export const mockMovies: Movie[] = [
  {
    uid: '1',
    movieName: 'Побег из Шоушенка',
    director: 'Фрэнк Дарабонт',
    rating: 9.1,
    year: '1994',
    imageSrc: 'https://cs8.pikabu.ru/post_img/big/2018/03/23/3/1521775992162180477.jpg',
    descr: `Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника.
     Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки.
      Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.`
  },
  {
    uid: '2',
    movieName: 'Области тьмы',
    director: 'Нил Бёргер',
    rating: 8,
    year: '2011',
    imageSrc: 'https://avatars.mds.yandex.net/get-ott/223007/2a00000160560b98a5f6f88ba79ffd861f27/678x380',
    descr: `Нью-йоркский писатель Эдди, желая преодолеть чёрную полосу в жизни, принимает засекреченный препарат под названием NZT. Таблетка выводит мозг парня на работу в нереальной мощности. Этот творческий наркотик меняет всю жизнь Эдди, за короткий срок он зарабатывает кучу денег, но скоро начинает страдать от зловещих побочных эффектов препарата. А когда пытается найти других NZT-гениев, чтобы понять, как можно справиться с этим пристрастием, он узнает страшную правду…`
  },
  {
    uid: '3',
    movieName: 'Остров проклятых',
    director: 'Мартин Скорсезе',
    rating: 8.2,
    year: '2010',
    imageSrc: 'https://nedelya40.ru/wp-content/uploads/2020/06/a043d08784f871e307eb.jpg',
    descr: `Два американских судебных пристава отправляются на один из островов в штате Массачусетс, чтобы расследовать исчезновение пациентки клиники для умалишенных преступников. При проведении расследования им придется столкнуться с паутиной лжи, обрушившимся ураганом и смертельным бунтом обитателей клиники.`
  },
  {
    uid: '4',
    movieName: 'Властелин колец: Братство кольца',
    director: 'Питер Джексон',
    rating: 8.6,
    year: '2001',
    imageSrc: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/1d36b3f8-3379-4801-9606-c330eed60a01/300x450',
    descr: `Два американских судебных пристава отправляются на один из островов в штате Массачусетс, чтобы расследовать исчезновение пациентки клиники для умалишенных преступников. При проведении расследования им придется столкнуться с паутиной лжи, обрушившимся ураганом и смертельным бунтом обитателей клиники.`
  },
  {
    uid: '5',
    movieName: '1+1',
    director: 'Оливье Накаш, Эрик Толедано',
    rating: 8.8,
    year: '2011',
    imageSrc: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/300x450',
    descr: `Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека, который менее всего подходит для этой работы, – молодого жителя предместья Дрисса, только что освободившегося из тюрьмы. Несмотря на то, что Филипп прикован к инвалидному креслу, Дриссу удается привнести в размеренную жизнь аристократа дух приключений.`
  },
  {
    uid: '6',
    movieName: 'Клаус',
    director: 'Серхио Паблос, Карлос Мартинес Лопес',
    rating: 8.7,
    year: '2019',
    imageSrc: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/279f9f19-6a29-4fae-935e-54ddf80c653b/300x450',
    descr: `Владелец почтовой империи, чтобы научить ленивого отпрыска по имени Джеспер уму-разуму, отправляет его на крайний север в город Смиренсбург. Тот должен организовать там почтовое отделение и за год обработать не менее 6000 писем. Прибыв на место, парень оказывается в зоне боевых действий: два семейных клана, так уж исторически сложилось, питают взаимную ненависть и свято чтут многовековую традицию при любой возможности мутузить друг друга и делать пакости. Разумеется, в такой обстановке не до писем, и почтовое отделение давно превратилось в курятник. Уже практически отчаявшись, Джеспер посещает лесного отшельника по имени Клаус, и их знакомство положит начало удивительным событиям.`
  },
];
