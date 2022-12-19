-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Дек 19 2022 г., 19:08
-- Версия сервера: 8.0.24
-- Версия PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `trekking`
--

-- --------------------------------------------------------

--
-- Структура таблицы `cart`
--

CREATE TABLE `cart` (
  `id` int NOT NULL,
  `itemId` int NOT NULL,
  `name` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `color` char(15) NOT NULL,
  `size` int NOT NULL,
  `price` int NOT NULL,
  `gender` char(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `cart`
--

INSERT INTO `cart` (`id`, `itemId`, `name`, `color`, `size`, `price`, `gender`, `user`) VALUES
(26, 11, 't-shirt', 'pink', 32, 15, 'children', 2);

-- --------------------------------------------------------

--
-- Структура таблицы `colors`
--

CREATE TABLE `colors` (
  `id` int NOT NULL,
  `name` char(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `colors`
--

INSERT INTO `colors` (`id`, `name`) VALUES
(1, 'yellow'),
(2, 'darkblue'),
(3, 'darkgreen'),
(4, 'maroon'),
(5, 'grey'),
(6, 'pink'),
(7, 'white');

-- --------------------------------------------------------

--
-- Структура таблицы `genders`
--

CREATE TABLE `genders` (
  `id` int NOT NULL,
  `name` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `genders`
--

INSERT INTO `genders` (`id`, `name`) VALUES
(1, 'man'),
(2, 'women'),
(3, 'children');

-- --------------------------------------------------------

--
-- Структура таблицы `orders`
--

CREATE TABLE `orders` (
  `id` int NOT NULL,
  `itemId` int NOT NULL,
  `name` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `color` char(15) NOT NULL,
  `size` int NOT NULL,
  `gender` char(10) NOT NULL,
  `price` int NOT NULL,
  `date` datetime NOT NULL,
  `user_id` int NOT NULL,
  `amount` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `orders`
--

INSERT INTO `orders` (`id`, `itemId`, `name`, `color`, `size`, `gender`, `price`, `date`, `user_id`, `amount`) VALUES
(14, 0, 'pants forclaz', 'yellow', 40, 'man', 30, '2022-08-24 00:00:00', 2, 1),
(15, 6, 't-shirt', 'pink', 38, 'woman', 20, '2022-08-24 00:00:00', 2, 1),
(16, 1, 't-shirt', 'yellow', 40, 'man', 10, '2022-08-24 00:00:00', 3, 1),
(17, 3, 'backpack', 'darkblue', 10, 'man', 60, '2022-08-24 00:00:00', 3, 1),
(18, 3, 'backpack', 'darkblue', 10, 'man', 60, '2022-08-28 00:00:00', 1, 1),
(19, 1, 't-shirt', 'yellow', 40, 'man', 10, '2022-08-28 00:00:00', 1, 1),
(20, 6, 't-shirt', 'pink', 38, 'woman', 20, '2022-08-28 00:00:00', 1, 1),
(21, 4, 'backpack', 'darkblue', 10, 'man', 60, '2022-09-11 00:00:00', 3, 1),
(22, 0, 'pants forclaz', 'darkblue', 40, 'man', 30, '2022-09-11 00:00:00', 3, 1),
(23, 5, 'giacket', 'darkblue', 38, 'woman', 60, '2022-09-11 16:46:37', 3, 1),
(24, 11, 't-shirt', 'darkblue', 32, 'children', 15, '2022-12-17 10:45:39', 1, 1),
(25, 11, 't-shirt', 'darkblue', 32, 'children', 15, '2022-12-17 10:45:40', 1, 1),
(26, 11, 't-shirt', 'darkblue', 32, 'children', 15, '2022-12-17 10:45:40', 1, 1),
(27, 11, 't-shirt', 'darkblue', 32, 'children', 15, '2022-12-17 10:45:40', 1, 1),
(28, 11, 't-shirt', 'darkblue', 32, 'children', 15, '2022-12-17 10:45:40', 1, 1),
(29, 11, 't-shirt', 'darkblue', 32, 'children', 15, '2022-12-17 10:45:40', 1, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` char(25) NOT NULL,
  `sec_name` char(25) DEFAULT NULL,
  `login` char(15) NOT NULL,
  `password` char(15) NOT NULL,
  `address` char(40) DEFAULT NULL,
  `theme` char(2) NOT NULL,
  `mail` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `isAdmin` char(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `sec_name`, `login`, `password`, `address`, `theme`, `mail`, `isAdmin`) VALUES
(1, 'Nikolas', 'Snorkell', 'NikolasSnorkell', 'NikolasSnorkell', NULL, 'D', 'snorkell@mail.ru', 'T'),
(2, 'Vlad', 'Krowker', 'krowker', 'krowker', NULL, 'L', 'krowker@mail.ru', 'F'),
(3, 'Bossik', 'Bossov', 'Boss', 'Boss', NULL, 'L', 'pushok_nik@mail.ru', 'F'),
(6, 'User', '', 'Snorkell', 'Snorkell', NULL, 'L', 'snorkell@mail.ru', 'F');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `genders`
--
ALTER TABLE `genders`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `color_id` (`color`),
  ADD KEY `gender_id` (`gender`),
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT для таблицы `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `genders`
--
ALTER TABLE `genders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
