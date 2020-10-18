# Neatflix
[Zobacz](https://jstrebeyko.github.io/neatflix/)

- roundtrip: package.json, folder structure, config files, main and App.vue
- root instance, DOM

![https://v3.vuejs.org/images/components.png](https://v3.vuejs.org/images/components.png)

```bash
Root Component
└─ TodoList
   ├─ TodoItem
   │  ├─ DeleteTodoButton
   │  └─ EditTodoButton
   └─ TodoListFooter
      ├─ ClearTodosButton
      └─ TodoListStatistics
```
- przykład interakcji: propsy.
- anatomia komponentu - tagi - na przykładzie
- App i Hello: import, rejestracja i renderowanie dzieci. propsy

- let's start
    - `vue-devtools`: [https://headwayapp.co/vue-js-devtools-changelog/timeline-and-api-166716](https://headwayapp.co/vue-js-devtools-changelog/timeline-and-api-166716)
    - `vetur VSCode`

- wybebeszyć Hello

## CZ I: W komponencie

  [data] [interpolacja-w-template'cie]
  > ZADANIE 1
  W Folderze src/components/ stwórz komponent `ShowsListItem.vue`. Niech on:

  * renderuje element `div.show-list-item`;
  * w funkcji data niech zwraca obiekt z kluczem `show` o następującym kształcie:
    show: {
      name: '', // tutaj tytuł filmu
      premiered: 0, // rok premiery
      rating: 0, // ocena, 0 - 10
    }
   uzupełnij go swojemu największemu odkryciu filmowemu 2020.
  * użyj interpolacji (`{{...}}`) by wyświetlić te dane w `<template>`
  * Zapisz komponent, a następnie zaimportuj, zarejestruj i wyświetl go w `App.vue` tak, jak robiliśmy to z `HelloWorld.vue`

  [bindowanie-atrybutów]
  > ZADANIE 2
  * Użyj wyszukiwarki grafiki by znaleźć plakat rzeczonego filmu czy serialu. Skopiuj jego adres URL.
  *  Do właściwości `show` naszego komponentu dodajmy jeszcze jedno pole: `img`. Niech będzie stringiem noszącym właśnie znaleziony adres.
  * Za pomocą dyrektywy `v-bind` "zbajnduj" (ang "zwiąż") atrybut stylu naszego komponentu, postaraj się zmienić właściwość `background-image` naszego komponentu tak, by równała się nowej właściwości `img`. __Pamiętaj!__
      * bindowane właściwości CSS przekazywane są camelCase'em.
      * syntax CSS: `background-image: url(...)` (będzie potrzebna interpolacja)

  _yarn add node-sass sass-loader -D_

  [handlery] [v-if] [interpolacja-z-operatorem-warunkowyn]
  > ZADANIE 3
  * Dodaj do naszego komponentu nową właściwość na obiekcie `show` zwracanym przez `data()` - `summary` - i napisz dwa zdania o serialu.
  * Dodaj tam również wartość logiczną (czyli po prostu Boolean, inaczej flagę) `summaryShown`. To ona będzie decydowała o tym, czy pokazać summary.
  * Stwórz na naszym komponencie listener wybranego przez Ciebie zdarzenia (`click`, `mouseenter`, `mouseleave`...) przestawiajacy flagę `summaryShown`. Możesz zrobić to zarówno w samym template, jak i definiując pożądaną akcję w kluczu `methods` na instancji komponentu. 
  * W końcu, stwórz element `<div>` i interpoluj w nim wartość `summary`. Dodaj do niego dyrektywę `v-if` i upewnij się, że element jest widoczny wyłącznie wówczas, kiedy `summaryShown` jest `true`. Niech swoimi stylami przykrywa resztę karty.

_komponent karty_

## CZ II: Pomiędzy komponentami
  [propsy] [v-bind] [lifting-state-up]
  Propsy potrafią przekazywać nie tylko wartości pierwotne, jak wartość loginczna `true` i string `True Detective`, ale i bardziej złożone, takie jak tablice, obiekty czy funkcje
  > ZADANIE 4
  * Przenieś właściwości `show` ze stanu `data()` komponentu `ShowsListItem` wyżej, czyli do komponentu App. Co się stało z naszą aplikacją?
  * Zadeklaruj `show` jako props w `ShowsListItem` i przekaż go w `App.vue`. Pamiętaj o dyrektywie `v-bind` (`:`), bez niej props zostanie zewaluowany jako string.

  * A teraz spróbuj zrobić to samo z `isSummaryShown` - przekazać  z `App.vue` do `ShowsListItem.vue`, i zadeklarować jako propsa. Wywołaj na nim swój hander z poprzedniego zadania. Co zauważasz?


  Dzieci otrzymują propsy i na nich opierają wyświetlaną treść. Choć możliwa jest zmiana wartości propsa przez dziecko, jest odradzana - jednym z założeń Vue jest odgórny kierunek przesyłu informacji. Ten paradygmat bardzo ułatwia debugowanie. Jeżeli komponent-dziecko chce zmiany zawartości propsa, musi o tym powiedzieć rodzicowi.

  Dokonujemy tego z pomocą wbudowanej funkcji `emit`.

  <script>
    this.emit('nazwa-wydarzenia', wartośćDoPrzekazania)```
  </script>
  
  <template>
    $emit('nazwa', wartośćDoPrzekazania)
  </template>

  emitowanych przez dzieci zdarzeń nasłuchujemy na rodzicu, identycznie jak tych natywnych - jak click - używając dyrektywy 

  `v-on:{nazwa wydarzenia}="hanler"`, gdzie

  __nazwa wydarzenia__ to natywne lub stworzone przez nas wydarzenie wyemitowane przez komponent (`click`, `focus`, `change`, ale i `moje-spoko-wydarzonko`);
  __handler__ to handler, referencja do funcji lub wyrażenie JS, które ma się wykonać, kiedy określone wydarzenie będzie miało miejsce

  aliasem dla dyrektywy `v-on` jest `@`, np. `@click="handler"`
  
  [emisje] [twist:trzymaj-niżej]
  > Zadanie 5
  * Zamień handler na `ShowsListItem` w ten sposób, aby emitował wydarzenie `toggleSummaryShown`. Nasłuchuj go na parencie i w jego wypadku zamień zmień wartość `isSummaryShown`
  * Gdzie tak na prawdę powinno się znajdować `isSummaryShown`? 

  [vfor]
  Dwa komponenty komunikują się ze sobą, i co? Pora zobaczyć, jak współgrają ich większe ilości!
  Podstawowym narzędziem do powielania komponentów jest dyrektywa `v-for` i ma ona formę

  `v-for="a in b"`

  Jest to to samo `in` którego używamy w JS do interowania się po obiekrach :) 

  Scope dyrektywy przewiduje również dodatkowe argumenty:
  `v-for="(i, index) in myArray"`
  `v-for="(value, name, index) in myObj"` 

  wymóg `key` Vue by default it uses an “in-place patch” strategy - nie przesuwa elementów, a "ceruje" tak, aby zgadzały się z oczekiwaną wartością dla danego indexu. Jest to szybkie, ale powoduje problemy, kiedy potrzebujmy dostępu do stanu komponentów dzieci lub dostępu do tymczasowego stanu DOM (jak input). Zawsze dodawaj zbindowany `key` z niepowtarzającą się, pierwotną wartością (najlepiej string, można użyć właściwości index z dyrektywy)

  zmienianie tablic - mutujące i niemutujące (a zwracające nową tablicę) metody. O tym co trzeba zrobić, by wartość była reaktywna i o tym co nie działa.

  > Zadanie 6
  * Weź poniższą listę filmów i zastosuj w stanie `App.vue` jako z kluczem `shows`
  [
        {
          name: 'True Detective',
          premiered: 2014,
          rating: 10,
          imgURL: 'http://static.tvmaze.com/uploads/images/medium_portrait/178/445621.jpg',
          summary: 'Tak, to jest po prostu świetny serial, no. Bardzo polecam',
        },
        {
          name: 'House Of Cards',
          premiered: 2013,
          rating: 10,
          imgURL: 'http://static.tvmaze.com/uploads/images/medium_portrait/169/424482.jpg',
          summary: 'Ojej, no ten to wyjątkowo, taki Thriller Polityczny najwyższych lotów.',
        },
        {
          name: 'Berserk',
          premiered: 1997,
          rating: 9,
          imgURL: 'http://static.tvmaze.com/uploads/images/medium_portrait/0/249.jpg',
          summary: 'Kolega mówi, że to świetne animbo, ale trochę się cykam',
        },
        {
          name: 'Rick and Morty',
          premiered: 2013,
          rating: 9,
          imgURL: 'http://static.tvmaze.com/uploads/images/medium_portrait/1/3603.jpg',
          summary: 'A to jest o takim tym, dziadku co jest ogórkiem czy coś',
        },
        {
          name: 'Conan',
          premiered: 2010,
          rating: 8,
          imgURL: 'http://static.tvmaze.com/uploads/images/medium_portrait/1/4583.jpg',
          summary: 'Śmieszny pan taki.',
        },
        {
          name: 'The Daily Show with Jon Stewart',
          premiered: 1999,
          rating: 10,
          imgURL: 'http://static.tvmaze.com/uploads/images/medium_portrait/1/4598.jpg',
          summary: 'Inny śmieszny Pan',
        },
      ]

  * Użyj dyrektywy `v-for` na `ShowsListItem.vue` tak, aby wyświetlić wszystkie pozycje.

  * Zaczyna robić się tłoczno w naszym centralnym komponencie: może pora przenieść listę filmów gdzieś indziej? Stwórz komponent `./components/ShowsList.vue` i przenieś tam logikę wyświetlania filmów. Niech komponent przyjmuje w propsie listę filmów do wyświetlenia.
  * Zwróć uwagę na to, aby przekazać wszystkie konieczne elementy logiki wyświetlania, zadeklarować propsy etc. Zwróć również uwagę, że tag template może przyjąć jedynie pojedyńczy element, owiń więc `v-for`owany komponent w `div.shows-list`.

  [v-model] Do tej pory dane przekazujemy z góry, a komunikację w dwie strony, jak tę pomiędzy stanem `ShowsList` i dzieckiem obsługujemy ręcznie. Istnieje jednak potężny skrót dla tego rodzaju komunikacji. `v-model` pozwala nam automatycznie mapować zmiany w różnego rodzaju inputach do stanu komponentu i odwrotnie.

  `v-model` ma różne działanie w zależności od rodzaju inputu, na jakim go stosujemy:
    `<text>` i `<textarea>`: przekazujemy mu ze stanu `value` i nasłuchujemy wydarzenia `input`;
    `checkboxes` oraz `radiobuttons`: przekazujemy właściwość `checked` i nasłuchujemy wydarzenia `change`;
    `select` używa `value` i ustawia się na `change`.

    Pora stworzyć podstawy wyszukiwania filmów, ale zacznijmy od samego ich filtrowania
    * Stwórz nowy komponent: `SearchInput.vue`. Niech w template będzie miał on input, którego wartość będzie równa przekazywanemu do komponentu propsowi `value`, a na wydarzenie `input` niech emituje wartość swojego inputu (czyli to, co dostajemy w `(e) => e.target.value`, lub z użyciem `$event` w template)
    * w `App.vue` zaimportujmy nasz komponent, zarejestrujmy w obiekcie `components` i użyjmy w template. Stwórzmy w stanie `App.vue` również właściwość `searchedPhrase` i zepnijmy ją do `v-model` na `SearchInput`. Zobacz jak wpisywanie rzeczy w SearchInput łatwo zmienia stan komponentu `App`!


  Ten nagłówek nie wygląda najlepiej - przydałoby się jednak go upięknić, jeszcze zanim zabierzemy się do nowej funkcjonalności. Oczywiście, jeśli uważasz że rozwiązaniem jest stworzenie kolejnego już komponentu: masz rację! Chcemy mieć wszakże piękny navbar z logiem, prawda? Owinięcie `SearchInput` w szeroki, czarny div rozwiązałoby sprawę, ale zrobimy to oczko inaczej, by zajrzeć przy okazji do jednej, ważnej funkcjonalności - `sloty`
  Zwykły slot:
  <slot />
  Slot z domyślną zawartością:
  <slot>Moje uszanowanie</slot>
  Tak zwany "slot nazwany" (`named slot`):
  <slot name="header"/>

  Aby coś przekazać do slotów, od wersji Vue 2.6.0, najlepiej używać elementu `<template>` - tak, dokładnie tego samego, którego używamy definiując, uh, _template_ naszych komponentów! Jeśli chcemy trafić do slota nazwanego, piszemy `<templare slot="nazwaSlota">`, lub w skrócie `<template #nazwaSlota>`
  
  [v-slot]
  > Zadanie 8
  * Stwórz komponent `components/TopNav.vue`. Niech będzie zwykłym, czarnym divem o pełnej szerokości i wybranej wysokości. Niech posiada w sobie sloty, #left i #right
  * Zaimportuj i zarejestruj nowopowstały komponent w `App.vue`. W lewego slota poślijmy mu logo naszej applikacji - `<h1>Neatflix</h1>`, a w prawego - `Search Input`
  * W razie potrzeby wyśrodkuj slotowe dzieci w `TopNav.vue` używając flexboxa i marginesów.

 [computed]
  Powróćmy do naszej funkcjonalności wyszukiwania. Wiemy, że mamy jakieś filmy w stanie aplikacji. Wiemy, że możemy chcieć pokazać pełną listę, lub np. ograniczoną przez różnego rodzaju filtry - wyszukiwanie, kategorie. Musimy więc móc zachować swoje dane (bo transfer kosztuje, prawda?), a także wyświetlić jakiś ich podzbiór. Moglibyśmy mieć jednocześnie dwie osobne listy. ALBO! użyć `computed properties`, czyli obliczanych właściwości.

  Właściwości te:
  - są bardzo wydajne, ponieważ system reaktywności Vue śledzi zmiany w zależnościach każdej z nich i cache'uje wyniki (inaczej niż `metody`, które są ewaluowane na nowo przy każdym wywołaniu); 
  - definiowane są na instancji komponentu w kluczu `computed` (obiekcie) jako funkcje;
  - zawsze coś zwracają, nie biorą argumentów;
  - mamy do nich dostęp równie łatwy co do właściwości z `data`, `methods` czy `propsów`;

  > Zadanie 9
    * Od teraz chcemy wyświetlać pełną listę filmów wyłącznie wówczas, kiedy `SearchInput` jest pusty - w przeciwnym wypadku, od`.filter()`ujmy interesujące nas filmy! Stwórz `computed property` `diplayedShows` z rzeczoną funkcjonalnością, która zwracać nam będzie nową listę programów - tych, które odpowiadają zawartości inputa. Ważne - chcemy, by rozmiar liter nie miał znaczenia. Pamiętaj zaktualizować template `App` o tę nową właściwość!
_input wyszukiwania_

  [lifecyclehooks]
  Podobnie jak wszelkie stworzenie, tak i komponenty mają swój cykl życia. Komponent niejako je sygnalizuje, co nam z kolei pozwala się nam pod nie "zapiąć" (stąd "lifecycle _hooks_"), czyli ustawić akcje w ich okazji.
  ![https://vuejs.org/images/lifecycle.png](https://vuejs.org/images/lifecycle.png)
  Najważniejsze z nich:
    => `created`: instancja Vue właśnie powstała, system reaktywności (obserwowanie zależności, tak więc i `computed` właściwości) już działa;
    => `mounted`: zawartość naszych tagów `template` została przekompilowana na funkcje render (_h_, pamiętasz?), które z kolei generują HTML, którym zastąpiona jest zawartość tagów;
    => `updated`: stan komponentu (jego `data`, czy `propsy` na których polega) zmienił się, a VDOM właśnie się zrerenderował i "zapatchował" widoczne zmiany;
    => `destoyed`: `watcher`y, dzieci komponentu i `event listenery` zostały właśnie zdarte, to już koniec...
    
    Wszystkie z powyższych mają również swój wariant mający miejsce tuż przed opisaną akcją. (created-> beforeCreate, update -> beforeUpdate
    ważne uwagi: różnica między created a mounted, timery i listenery poza systemem reaktywności

  > Zadanie 10
  [api]
  * wybierz odpowiedni lifecycle hook i zrób w nim fetcha na endpoint 
  `https://api.tvmaze.com/shows?page=0`, następnie odczytaj z niego JSON przy pomocy `reponse.json()` i ostatecznie użyj, by nadpisać właściwość `shows` na `App`.
  * Przez różnicę w kształcie danych nasza aplikacja nieco się wywaliła! Popraw ocenę i zdjęcie w tle. State pozycje mogą wchodzić w grę, spróbuj tak przerobić binding, żeby błędu nie było! Potem, oczywiście, można je usunąć. (Są to okrojone wyniki właśnie z tvmaze); 
  * Zdaje się, że nasz sposób indeksowania v-forze nie był odporny na programy o tej samej nazwie. Zaradź. (w razie wątpliwości, wróź do sekcji o [v-for]) A może na samym obiekcie jest jakaś właściwość, z pomocą której moglibyśmy bezbłędnie identyfikować zasoby? ;)

  Gratulacje! W tym momencie mamy aplikację zaciągającą dane z serwera, które na dodatek potrafimy przeszukiwać!

  Co jest nie tak z naszą aplikacją? 2 duże wątki: brak detali i mało danych.

=============
PODSUMOWANIE
=============

# CZ III: pomiędzy widokami
  [router] [transition?]

  Ogólnie, dzięki dostępności do webowych API i systemowi reaktywności Vue, łatwo jest zrobić podstawowy routing:
      const NotFound = { template: '<p>Page not found</p>' }
      const Home = { template: '<p>home page</p>' }
      const About = { template: '<p>about page</p>' }

      const routes = {
        '/': Home,
        '/about': About
      }

      new Vue({
        el: '#app',
        data: {
          currentRoute: window.location.pathname
        },
        computed: {
          ViewComponent () {
            return routes[this.currentRoute] || NotFound
          }
        },
        render (h) { return h(this.ViewComponent) }
      })

  * wytłumacz, co dzieje się w powyższym przykładzie.

  Oficjalna biblioteka `vue-router`, ma wiele dodatkowych ficzerów:
    - Zagnieżdżone mapowanie ścieżek i widoków
    - modularna konfiguracja oparta na komponentach
    - dostęp do parametrów ścieżek, parametrów zapytan typu `query`, `wildcards`
    - wsparcie dla efektów tranzycji (tak jak w samym Vue)
    - linki z automatycznie stosowanymi klasami CSS dla oznaczania aktywnej lokalizacji
    - tryby historii HTML5 or oraz tak zwanego `hash`a, z auto fallbackiem do IE9
    - możliwość personalizowania sposobu, w jaki zachowuje się skrolowanie...

    zanim zainstalujemy, skopiujmy treść naszego pliku `App.vue`
    `vue add router`

    Wklej nasz stary `App.vue na swoje miejsce`, a z tego nowe zaś weź wyłcznie ten frament:
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    (wklejmy go nad nasz `TopNav.vue`, byśmy mu się mogli przyjrzeć

    oraz style do styli:
      #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  > Zadanie 11
  * Nie wszystko jeszcze bangla - otóż pozbyliśmy się już plików, na które liczył nasz gagatek. Nic prostszego: wykomentuj wadliwe importy z `views/Home.vue`
  * Wykasuj nawigację `<router-link>` z `App.vue`. Przenieś wszystko stamąd (poza stylami `#app` i `<router-view>`) i nadpisz `views/Home.vue`. Od teraz cała logika związana z wyświetlaniem listy filmów będzie związana z adresem URL, robiąc miejsce na inne funkcjonalności naszej aplikacji. 

  roundtrip routowy
  - zagnieżdżony router
  - dynamiczne routy

  * Stwórz najproszą możliwą stronę dla 404: Not Found, używając tzw "dzikiej karty" (`wildard`), gwiazdki - `*`. Pamiętaj! kolejność routów ma znaczenie, ścieżki są ewaluowane po kolei! Najprościej byłoby go symulować zwracając obiekt z funckją render, podobną jak w `main.js`. Funkcja stanowiąca jej argument przyjmuje trzy parametry:
  `h('nazwaTagaHTML',
    {}, // obiekt atrybutów, może być pusty
    [] // tablica z dziećmi
    )` 

  Skoro mamy router, to możemy wreszcie zrobić dedykowane strony z detalami filmów! I przy okazji dciążyć nieco centralny komponent `App.vue`.

  * Zaktualizuj router (a dokładniej: jego właściwość `routes`) , umożliwiając nawigację na strony poszczególnych pozycji naszej listy `shows`: Zastąpmy nieużywane przez nas `About` na `Details`, komponentem dla ścieżki będzie komponent który zaraz stworzymy. Pamiętaj: ścieżka ta będzie miała dynamiczny parametr `id`!
  * Stwórz komponent widoku Szczegółów produkcji `views/Details.vue`, który obecnie może wyświetlać po prostu pola znane nam z api. Czas już wyświetlić porządne `summary`! Przyjrzyj się przykładowym polu Summary. Co widzisz? Napisz na naszym kanale Slackowym, a ja chętnie omówię potrzebną dyrektywę!

  * Usuń z komponentu całą logikę związaną z wyświetlaniem `summary` na  `ShowListItem` i oblecz komponent w `<router-link>`, którego propsa `to` zbinduj dynamicznie tak, aby prowadził nas do odpowiedniej strony. Kliknij na kartę. Co się dzieje?
  * Aby pobrać dane pojedyńczej pozycji z listy, potrzebujemy znów odwołać się do `api`. Endpoint to `https://api.tvmaze.com/shows/${id}`. Pozostaje nam w odpowiednim momencie życia komponentu pobrać i zastąpić wewnętrzną właściwość `data` obiektem zwracanym przez endpoint.
  * Biorąc pod uwagę, że funkcjonalność pobierania 250 jak i pojedyńczego wyniku są bardzo podobne, stwórzmy im formę interfacu. Stwórz w `src` folder `api`, a w nim plik `index.js`. Niech moduł ten exportuje domyślny obiekt api o funkcjami `fetchBatch()` i `fetchDetails()`, fetchujące z adresu będącego wynikiem konkatenacji lub interpolacji zmiennej wspólnego trzonu URL i odpowiedniej końcówki adresu. Niech funkcje zwracają promise z łańcuchem `then` zamieniającym reponse na obiekt lub tablicę, odpowiednio. W ten sposób, importując api z `@/api` i wołając na nim odpowiednie metody możemy przypisywać odpowiedź serwera do zmiennych w komponentach! Spróbuj zrobić to w `components/ShowsListItem.vue` oraz `views/Home.vue`. Zwróć uwagę, że przypisać chcemy rozwiązanie Promisa, a nie jego samego - na szczęście [lifecycle-hooks] mogą być też z `async`, z `await` w środku! Uwaga: `fetchDetails()` wymaga argumentu, który łatwo pobrać można z `this.$route.params`.

  * Stwórz na stronie z detalami guzik 'go-back', którego kliknięcie wołać będzie metodę `$router.go()` z parametrem liczbowym określającym poprzednie miejsce w aplikacji.
  

  GRATULACJE! Osiągnęliśmy podstawową funkcjonalność aplikacji wraz z routingiem. To jednak nie koniec!

  ## CZ IV: Zadania Dla Zuchów
  
  Jeśli dotarłeś aż tutaj i masz jeszcze siłę to czytać, to znaczy że możesz mieć ochotę rozwiązać kolejne zagadnienia związane z aplikacją! Poniższe zadania można wykonywać w dowolnej kolejności, wybierz coś dla siebie.

  [loading]
  > Zadanie α
  Teraz coś dla dobrego UXu. Dużo danych ściągamy, ale nie przepraszamy za czkawkę, kiedy nasze wyniki nagle wskakują
  * Informuj użytkowników że pracujemy dzięki spinnerowi na lekkim overlayu, przysłaniającym warunkowo ekran aż nie skończy się request.

  [api] [events]
  > Zadanie X
  Obecnie nasz search jedynie filtruje posiadane wyniki, a przecież jest jest ich tyle więcej! Jest też do tego enpoint.
  * Rozszerz `api` o funkcję `fetchSearched` akceptującą szukaną frazę (i uderzającą pod `/search/shows?q=${zapytanie}`). Użyj jej w ramach handlera akcji wyszszukania, np w wyniku wciśnięcia klawisza enter. (`@keydown.enter`).
  * Poziom 2: Fajną opcją dla wyszukiwania jest także stworzenie adekwatnego routingu tak, aby dało się linkować do wyników wyszukiwania z pomocą query parameters. Oznaczałoby to konieczność rozszerzenie routera oraz stworzenia nowego widoku `Search`.

  [scroll], [api]
  > Zadanie Y
  * Badaj pozycję skrolla na stronie `Home` dzięki tradycyjnie dodanemu na `window` lub też w template'cie na komponent listenerowi na wydarzenie scroll! Zaktualizuj informację o obecnej wysokości strony, określ offset i wyzwól `api.fetchBatch()` w odpowiednim momencie tak, aby zrobyć kolejną dawkę 250 filmów. Uwaga! Te grupy filmów wynikają z formy paginacji wyników na endpoincie. By dostać więcej nowych wyników, musimy dodatkowo trzymać informacje o bieżącej stronie oraz lekko zmienić naszą funkcję w `api`.

  [computed] [genres]
  > Zadanie Z
  U naszej konkurencji - w tak zwanym Netflixie, taka aplikacja - po lewej stronie jest menu z kategoriami, których wybranie filtruje wyniki.
  * Zaimplementuj podobne menu, dodatkowo filtrujące wyniki przekazywane `ShowsList`
  * Poziom 2: Czy potrafisz zrobić to lepiej? Tak, aby można było wybrać pare wyników jednocześnie. Protip: `v-model` na checkboxie bardzo tu pomoże
  * Poziom 3: Niech zmiany wywołują zmiany w URL, a Twój router niech to przewidzi, przekazując odpowiednie propsy komponentowi `Home`. Opcja `props` na routerze może się tu okazać przydatna.

  [ytAPI]
  > Zadanie Ω
  * Zbadaj możliwość embeddowania filmiku będącego pierwszym wynikiem w wyszukaniu `{nazwaSerialuLubFilmu} trailer` z youtube.




