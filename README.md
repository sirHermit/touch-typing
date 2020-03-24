# Українські словники для різних програм та сервісів для навчання сліпому набору
Ukrainian typing dictionaries for different programs and services

## Як допомогти цьому репозиторію
Було б чудово, якщо б ви змогли створити PR у потрібному вам словнику. Також не буде зайвою допомога у налаштуванні CI/CD для спрощення деплою словників на різні сервіси.

### Вимоги до текстів
Текст повинен бути у суспільному надбанні (public domain) або тексти з різних ресурсів із зазначенням посилань на них.
Це можуть бути:
- тексти новин чи статей (посилання на ресурси обов'язкові);
- уривки статей Вікіпедії;
- твори класиків, які за давністю вже є у площині суспільного надбання.

Список письменників, чиї твори вже у суспільному надбанні, можна переглянути тут:

https://uk.wikipedia.org/w/index.php?title=Категорія:Письменники,_чиї_твори_перебувають_у_суспільному_надбанні

Тексти цих авторів можна спробувати знайти на Wikisource:

https://uk.wikisource.org/w/index.php?search=


### Вимоги до назви коміта
В полі `message` коротко описуйте зміни за таким шаблоном:
```
chore: add excerpt by <ім'я автора або назва ресурсу латиницею>
```
Наприклад, для уривку з книги Івана Нечуй-Левицького `message` буде мати такий вигляд:
```
chore: add excerpt by Ivan Nechui-Levytskyi
```

У полі `extended description` додавайте гіперпосилання на ресурс із якого ви взяли текст. Наприклад, для уривку із "Кайдашевої сім'ї":
```
https://uk.wikisource.org/wiki/%D0%9A%D0%B0%D0%B9%D0%B4%D0%B0%D1%88%D0%B5%D0%B2%D0%B0_%D1%81%D1%96%D0%BC%27%D1%8F/II
```         