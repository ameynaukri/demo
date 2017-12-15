-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2017 at 11:20 AM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.0.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `contact_no` varchar(100) NOT NULL,
  `user_type` varchar(100) NOT NULL,
  `code` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  `datetimeOld` varchar(100) NOT NULL,
  `server_key` varchar(5000) NOT NULL,
  `token` varchar(5000) NOT NULL,
  `status` int(11) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `full_name`, `password`, `contact_no`, `user_type`, `code`, `date`, `datetimeOld`, `server_key`, `token`, `status`, `image`) VALUES
(1, 'superadmin@gmail.com', 'Super Admin', '12345678', '1234567888', 'SuperAdmin', '87687', '', '', '0', '0', 1, ''),
(2, 'deepak@gmail.com', 'deepak', 'deepak', '+918827007007', 'Customer', '', '2017-07-14', '2017-07-18 15:25:05.757', '', '', 1, ''),
(386, '', '', '', '', '', '', '', '', '', '', 0, 'file-1513333171073.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=387;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
