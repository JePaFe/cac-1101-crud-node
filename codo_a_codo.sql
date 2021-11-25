-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 25-11-2021 a las 15:06:16
-- Versión del servidor: 10.6.4-MariaDB
-- Versión de PHP: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `codo_a_codo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`) VALUES
(1, 'Producto Nro 1', NULL),
(2, 'Producto Nro 2', NULL),
(3, 'Producto desde la DB', 'Aliquam ut ipsum nec leo venenatis lacinia quis quis purus. Maecenas molestie suscipit nisi in congue. Nullam facilisis venenatis lectus a eleifend. Curabitur dignissim leo a mauris ultrices bibendum. Donec ullamcorper, nisl a tempor egestas, elit libero aliquam tellus, eget vehicula risus nisl eget lorem. Aenean pellentesque elit viverra, ultricies justo nec, dignissim magna. Suspendisse condimentum libero quis nisi luctus, quis egestas quam posuere. Duis semper sapien non felis pulvinar venenatis. Nam mi tortor, rutrum tempor sollicitudin viverra, pellentesque et sapien.\n\nSed sollicitudin finibus vehicula. Donec nisl risus, malesuada id sem ut, euismod ultrices arcu. Nulla venenatis ultricies semper. Aliquam cursus eleifend mi, non rhoncus dui tempus tempus. Vestibulum at dapibus felis. Fusce laoreet, ex ut malesuada pellentesque, est purus commodo lorem, ac tempus elit enim nec nisl. Etiam nec pretium elit, non malesuada ex. In tristique, enim eget vehicula sodales, ante magna porta tellus, non porttitor mauris augue sed est. Praesent fringilla, nibh quis congue auctor, risus ex fermentum lorem, non imperdiet tortor leo non lacus. Quisque imperdiet nec dui ut ullamcorper. Nam gravida, tellus sed malesuada dignissim, orci mauris sagittis odio, vitae interdum est nisi vel odio. Etiam non molestie nisl. Fusce elementum scelerisque metus quis venenatis. Ut finibus, odio vel dictum ultricies, tellus eros posuere risus, sit amet auctor arcu risus sed nibh. Fusce consectetur, libero tempor pulvinar tincidunt, arcu turpis pharetra tellus, quis ultricies ligula purus quis felis. In interdum purus a magna pretium, in scelerisque felis mollis.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
