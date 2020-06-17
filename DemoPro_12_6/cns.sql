-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2020 at 12:34 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cns`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_forum`
--

CREATE TABLE `tbl_forum` (
  `forum_id` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `category` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `story` varchar(100) NOT NULL,
  `comments` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_forum`
--

INSERT INTO `tbl_forum` (`forum_id`, `id`, `category`, `title`, `story`, `comments`, `date`) VALUES
(1, 1, 'Food', 'Title of deash', 'food', 'lunch', '2017-02-02'),
(2, 2, 'Food', 'Title of deash', 'food', 'lunch', '2017-02-02'),
(3, 22, 'Body', 'Title of deash', 'food', 'lunch', '2017-02-02'),
(4, 62, 'Body', 'Title of deash', 'food', 'lunch', '2017-02-02'),
(5, 77, 'Body', 'Title of story1', 'Description of the story', '0', '2017-02-02'),
(7, 77, 'Events', 'yy6', 'f', '0', '2017-04-12 21:10:17'),
(8, 77, 'Events', '0', 'Aloo poha recipe or potato poha recipe with step by step photos – we used to simply call this dish p', '0', '2017-04-12 21:14:14'),
(9, 77, 'Events', 'ficc', 'Aloo poha recipe or potato poha recipe with step by step photos – we used to simply call this dish p', '0', '2017-04-12 21:16:49'),
(10, 77, 'Events', '0', 'Aloo poha recipe or potato poha recipe with step by step photos – we used to simply call this dish p', '0', '2017-04-12 21:16:59'),
(11, 77, 'Food', '0', 'f', '0', '2017-04-12 21:17:01'),
(12, 77, 'Food', '0', 'Aloo poha recipe or potato poha recipe with step by step photos – we used to simply call this dish p', '0', '2017-04-12 21:18:30'),
(13, 77, 'Food', '0', 'Aloo poha recipe or potato poha recipe with step by step photos – we used to simply call this dish p', '0', '2017-04-12 21:18:32'),
(14, 77, 'Food', '0', 'Aloo poha recipe or potato poha recipe with step by step photos – we used to simply call this dish p', '0', '2017-04-12 21:18:37'),
(15, 77, 'Food', '0', 'l', '0', '2017-04-12 21:19:31'),
(16, 77, 'Cleaning', 'yy6', 'uuù', '0', '2017-04-12 21:29:44'),
(17, 77, 'Cleaning', 'fghhj', 'ffggh', '0', '2017-04-13 10:35:10'),
(18, 77, 'Cleaning', 'fghhj', 'ffgghj', '0', '2017-04-13 10:43:27'),
(19, 77, 'Cleaning', 'sports is must in humen life', 'some times we feel there are so many thing that can be happend in our daily life but it can be ', '0', '2017-04-13 11:16:12'),
(20, 77, 'Events', 'events', 'ebdhfgkggkfjf', '0', '2017-04-13 11:19:47'),
(21, 77, 'Food', 'harsh m', 'dufffig', '0', '2017-04-13 12:07:51'),
(22, 77, 'Food', 'dev', 'fhfffifkvvfjccjddbxbz.ztztnzzfnz', '0', '2017-04-13 12:09:06'),
(23, 77, 'Food', 'harsh m', 'rhfjfffkgmgmfffdjdjdjrr', '0', '2017-04-14 11:12:07'),
(24, 77, 'Events', 'jjjh', 'hhhh', '0', '2017-04-14 06:46:13'),
(25, 77, 'Sports', '(params.title)?params.title:false', '(params.story)?params.story:false', '0', '(params.date)?params.date:false'),
(26, 77, 'Sports', '(params.title)?params.title:false', '(params.story)?params.story:false', '0', '(params.date)?params.date:false'),
(27, 77, 'Sports', '(params.title)?params.title:false', '(params.story)?params.story:false', '0', '(params.date)?params.date:false'),
(28, 77, 'Sports', '(params.title)?params.title:false', '(params.story)?params.story:false', '0', '(params.date)?params.date:false'),
(29, 77, 'Food', '(params.title)?params.title:false', '(params.story)?params.story:false', '0', '(params.date)?params.date:false'),
(30, 77, 'Food', 'Title of story', 'complete story', '0', '2017-04-12 21:10:17'),
(31, 77, 'Food', 'Title of story', 'complete story', '0', '2017-04-12 21:10:17'),
(32, 77, 'Food', 'Title of story', 'complete story', '0', '2017-04-12 21:10:17'),
(33, 77, '0', '0', '0', '0', '2017-04-12 21:10:17'),
(34, 77, 'Food', 'asdasadsdsad', 'sdadsadsad', '0', '2017-04-12 21:10:17'),
(35, 77, 'Food', 'asdsdsd', 'adsdsad', '0', '2017-04-12 21:10:17'),
(36, 77, 'Food', 'asdsddsads', 'dsdsad', '0', '2017-04-12 21:10:17'),
(37, 77, 'Food', 'sdfdfdff', 'nbbmnmnmnmnvbmbnmbnvmnmnmn', '0', '2017-04-12 21:10:17'),
(38, 77, 'Food', 'asdsdsd', 'sdadasdasd', '0', '2017-04-12 21:10:17'),
(39, 77, 'Food', 'Title of story', 'complete story', '0', '2017-04-12 21:10:17'),
(40, 77, 'Food', 'dfdsfdfdffdf', 'dfsfdfsdf', '0', '0'),
(41, 77, 'Cleaning', 'dsfdsfdfsfdsf', 'dsfdfdsfdf', '0', '0'),
(42, 77, 'Sports', 'asdsdfdsffsdf', 'dsfsdfdsfdsf', '0', '0'),
(43, 77, 'Body', 'sxxxcxx', 'ascffsd', '0', '0'),
(44, 77, 'Body', '0', '0', '0', '0'),
(45, 77, 'Food', 'qwrrrr', 'lkjjjcffssaa', '0', '0'),
(46, 77, 'Food', 'Adolfo\'s', 'skdididk', '0', '0'),
(47, 77, 'Food', 'Optional(<CNSUser.RSFloatInputView: 0x7fe161e569d0; frame = (3 85; 408 57); autoresize = W+BM; gestu', 'Optional(<CNSUser.RSFloatInputView: 0x7fe161e588e0; frame = (1 189.667; 408 130.333); autoresize = W', '0', '0'),
(48, 77, 'Food', '<CNSUser.RSFloatInputView: 0x7fb8694855c0; frame = (3 85; 408 57); autoresize = W+BM; gestureRecogni', '<CNSUser.RSFloatInputView: 0x7fb869489c50; frame = (1 189.667; 408 130.333); autoresize = W+TM+H+BM;', '0', '0'),
(49, 77, 'Food', '<UITextField: 0x7f8c87445c10; frame = (16 28.335; 376 20.64); text = \'Assessed\'; opaque = NO; tintCo', '<UITextField: 0x7f8c87434bf0; frame = (16 65.0017; 376 20.64); text = \'Dssadsadasdsdsds\'; opaque = N', '0', '0'),
(50, 77, 'Food', 'dsdsadsad', 'assessed', '0', '0');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(250) NOT NULL,
  `email` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `middle_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `userType` varchar(100) NOT NULL,
  `contact_no` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  `time` varchar(100) NOT NULL,
  `shop_name` varchar(100) NOT NULL,
  `area_of_services` varchar(100) NOT NULL,
  `code` varchar(100) NOT NULL,
  `datetimeOld` varchar(100) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`, `address`, `first_name`, `middle_name`, `last_name`, `userType`, `contact_no`, `date`, `time`, `shop_name`, `area_of_services`, `code`, `datetimeOld`, `gender`, `status`) VALUES
(1, 'dhananjay', '12345', 'aamey.raverkar@gmail.com', '31 Vijay nagar', 'Ankit', 'kumar', 'Solanki', 'admin', '9754845046', '2017-01-26', '10-2', 'Apna Sweet', 'Bhopal', 'ab79475', '2017-04-07 17:54:53.574', 'Male', 1),
(2, 'deepak', 'deepak', 'deepak@inwizards.com', '31 Vijay nagar', 'Deepak', 'kumar', 'Solanki', 'admin', '9713551729', '2017-01-26', '12:9PM-11:9PM', 'JMB', 'Bhopal', '917295e', '2017-04-07 13:22:41.037', 'Male', 1),
(3, 'demo', 'demo', 'demo@gmail.com', '31 Vijay nagar', 'sitara ', '', '', 'admin', '9754845', '2017-01-26', '11:00 to 12:00', 'Arun Store', '', '1487908739064', '', 'male', 1),
(4, 'rakesh', 'rakesh', 'rakesh@gmail.com', '32 Vijay nagar', 'rakesh', '', '', 'admin', '9521247470', '2017-01-26', '', 'Sweet Store', '', '16457a2', '2017-04-07 13:02:55.211', 'Male', 1),
(5, 'Ankit', 'Ankit', 'jitendra@inwifgfdzards.com', '33 Vijay nagar', 'Ankit', '', '', 'admin', '8653636', '2017-01-26', '', 'Ankit Store', '', '1487908942237', '', 'male', 1),
(6, 'amey_raverkar', 'amey123', 'sdfdsf', '31 Vijay nagar', 'Amey', '', '', 'admin', '9754845046', '2017-01-26', '', 'Raverkar Store', '', '2222', '2017-02-27 12:42:16.803', 'Male', 1),
(7, 'jitendra', 'John', 'jitendra@gmail.com', '31 Vijay nagar', 'Jitendra', '', '', 'admin', '865xx3636', '2017-01-26', '', 'Jitendra Store', '', '1487909921640', '', 'male', 1),
(68, 'jitsxxsdgdgdfdfu', 'Mark', 'jitendra@inxxwifyyygfdzards.com', '31 Vijay nagar', 'John', '', '', 'customer', '8959653636', '2017-02-11', '', '', '', '88c47d1', '2017-04-07 12:17:39.505', 'male', 1),
(69, 'amey123', 'Mohan', 'jzards.com', '31 Vijay nagar', 'Mark', '', '', 'customer', '97548450', '2017-02-11', '', '', '', '91ad3cd', '', 'male', 1),
(70, 'ameya123', 'Sohan', 'jza1rds.com', '31 Vijay nagar', 'Mohan', '', '', 'customer', '9', '2017-02-11', '', '', '', '91ad3cd', '', 'male', 1),
(71, 'ameya1ww23', 'rrrrr', 'jza31rds.com', '31 Vijay nagar', 'Sohan', '', '', 'customer', '975484', '2017-02-11', '', '', '', '91ad3cd', '', 'male', 1),
(72, 'ameya1ww23qq', '11dd1', 'jza31rttds.com', '31 Vijay nagar', 'Anuj', '', '', 'customer', '9834784578', '2017-02-11', '', '', '', 'fe6f0f9', '', 'male', 1),
(73, 'ameya1w99w23qq', 'iiiiii', 'jza31tds.com', '31 Vijay nagar', 'Ankur', '', '', 'customer', '98784578', '2017-01-26', '', '', '', 'ab1ea52', '', 'male', 1),
(74, 'sourabh', '12345', 'sourabh@gmail.com', '31 Vijay nagar', 'Sourabh', '', '', 'customer', '9039343396', '2017-01-26', '', '', '', 'd0a6cde', '', 'Male', 1),
(75, 'abhishek', '12345', 'abhi@gmail.com', '31 Vijay nagar', 'Abhishek', '', '', 'customer', '8871740366', '2017-01-26', '', '', '', '690b324', '', 'Male', 1),
(76, 'neha', 'neha', 'neha@inwizards.com', '31 Vijay nagar', 'Neha', '', '', 'admin', '8827007007', '2017-01-26', '', '', '', 'c5e601c', '2017-03-04 17:50:32.131', 'Female', 1),
(77, 'dev', 'dev', 'Inwizards@gmail.com', '31 Vijay nagar', 'Dev', '', '', 'customer', '9993422184', '2017-01-26', '8 A.M. - 2 P.M.', '', '', '13bd3a9', '', 'Male', 2),
(78, 'harsh', 'harsh', 'harsh@gmail.com', '31 Vijay nagar', 'Harsh mathur', '', '', 'customer', '9826786487', '2017-01-26', '', '', '', '5666c36', '', 'Male', 2),
(80, 'nishant', 'nishant123', 'nishant@inwizards.com', '', 'nishant', '', '', 'customer', '555555', '2017-03-04', '', '', '', '', '', 'Male', 1),
(84, 'Monty', 'Monty123', 'nishant11@inwizards.com', '', 'Monty', '', '', 'Developer', '00000', '2017-03-04', '', '', '', '6e9b574', '2017-03-04 17:05:40.728', 'Male', 1),
(89, 'NishantTiwari', 'nishant123', 'imnishanttiwari@gmail.com', '', 'Nishant', '', '', 'customer', '9755363672', '2017-03-29', '', '', '', '0d53fab', '', 'Male', 1),
(90, 'abc', 'abc', 'abc@gmail.com', '31 Vijay nagar', 'Abc', '', 'eif', 'customer', '9754845046', '2017-01-26', '', '', '', '83af5cb', '2017-04-07 12:46:11.691', 'Male', 1),
(93, 'Shivaji', '00000', 'Rajnianna@gmail.com', '', 'RajniKant', '', '', 'customer', '9999955555', '2017-03-29', '', '', '', 'c6adc81', '', 'Male', 1),
(94, 'golu', 'golu123', 'golu22@gmail.com', 'indore', 'golu', '', 'shukla', 'customer', '5554845046', '2017-03-25', '', '', '', '', '', 'Male', 1),
(95, 'amey_raverkar1111111', 'ankesh123', 'sdfdsf', 'dewas', 'ankesh', '', 'goyal', 'customer', '9754845046', '2017-03-3', '', '', '', '', '', 'Male', 1),
(96, 'punit', 'punit123', 'punit22@gmail.com', 'datiya', 'punit', '', 'tomar', 'customer', '4545845046', '2017-01-4', '', '', '', '', '', 'Male', 1),
(97, 'ravi', 'ravi123', 'ravi123@gmail.com', 'dhar', 'ravi', '', 'singh', 'customer', '4125845046', '2017-01-15', '', '', '', '', '', 'Male', 1),
(98, 'ajay', 'ajay123', 'ajay123@gmail.com', 'jhabuaa', 'ajay', '', 'jat', 'customer', '9995845046', '2017-01-15', '', '', '', '', '', 'Male', 1),
(99, 'vrishabh', 'vrishabh123', 'vrishabh123@gmail.com', 'rewa', 'vrishabh', '', 'patil', 'customer', '7775845046', '2017-01-15', '', '', '', '', '', 'Male', 1),
(100, 'mohit', 'mohit123', 'mohit123@gmail.com', 'dewas', 'mohit', '', 'goswami', 'customer', '99777845046', '2017-01-18', '', '', '', '', '', 'Male', 1),
(101, 'uday', 'uday123', 'uday123@gmail.com', 'dewas', 'uday', '', 'boss', 'customer', '77708845046', '2017-01-18', '', '', '', '', '', 'Male', 1),
(102, 'jay', 'jay123', 'jay123@gmail.com', 'mahu', 'jay', '', 'lalita', 'customer', '9260845046', '2017-02-01', '', '', '', '', '', 'Male', 1),
(103, 'om', 'om123', 'om123@gmail.com', 'rau', 'om', 'prasad', 'makhija', 'customer', '4545454466', '2017-04-18', '', '', '', '', '', 'Male', 1),
(104, 'vijay', 'vijay123', 'vijay123@gmail.com', 'vijaywada', 'vijay', '', 'joshi', 'customer', '74125845046', '2017-01-16', '', '', '', '', '', 'Male', 1),
(105, 'ayush', 'ayush123', 'ayush123@gmail.com', 'dhar', 'ayush', '', 'jaiswal', 'customer', '88708845046', '2017-05-18', '', '', '', '', '', 'Male', 1),
(106, 'akash', 'akash123', 'akash123@gmail.com', 'satna', 'akash', '', 'sisodiya', 'customer', '8888845046', '2017-01-18', '', '', '', '', '', 'Male', 1),
(107, 'mak', 'mak123', 'mak123@gmail.com', 'bhind', 'mak', '', 'parmar', 'customer', '7088455556', '2017-01-28', '', '', '', '', '', 'Male', 2),
(108, 'shanu', 'shanu123', 'shanu22@gmail.com', 'sehore', 'shanu', '', 'seth', 'customer', '5454545046', '2017-03-25', '', '', '', '', '', 'Male', 1),
(109, 'gopal', 'gopal123', 'gopal123@gmail.com', 'goa', 'gopal', '', 'rathi', 'customer', '1515121254', '2017-04-03', '', '', '', '', '', 'Male', 1),
(110, 'sonu', 'sonu123', 'sonu22@gmail.com', 'datiya', 'sonu', '', 'soni', 'customer', '9875845046', '2017-01-04', '', '', '', '', '', 'Male', 1),
(111, 'ram', 'ram123', 'ram123@gmail.com', 'depalpur', 'ram', '', 'ji', 'customer', '7535845046', '2017-01-15', '', '', '', '', '', 'Male', 1),
(112, 'rishabh', 'rishabh123', 'rishabh123@gmail.com', 'kalani nagar', 'rishabh', '', 'bajaj', 'customer', '7415124578', '2017-01-15', '', '', '', '', '', 'Male', 1),
(113, 'NITIN', '123456', 'jay@gmail.com', '', 'Nishant', '', '', 'customer', '9827346420', '2017-03-29', '', '', '', '95adb11', '', 'Male', 0),
(114, 'AAShu', 'ashu123', 'ashu91@gmail.com', '', 'Ashu', '', '', 'customer', '8871363064', '2017-03-30', '', '', '', '04a4782', '', 'Male', 0),
(115, 'yuvi', 'yuvi', 'yuvi@gmail.com', '31 Vijay Nagar', 'Yuvi', 'Kumar', 'Singh', 'admin', '9009018018', '', '', '', '', '', '', 'Male', 0),
(116, 'user', 'jvckvljcklvjc', 'cxjkhcjkxhcxjk', '', 'fkljdklfj', '', '', 'customer', 'cvcmnvcmvn', '2017-04-17', '', '', '', 'cbd0cfa', '', 'Male', 0),
(117, 'xgtyxyyc', '12', 'ygyguhuhi.comvtgy', '', 'yvyygvug', '', '', 'customer', '85868683828288282882', '2017-04-19', '', '', '', '9d75ffc', '', 'Female', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_forum`
--
ALTER TABLE `tbl_forum`
  ADD PRIMARY KEY (`forum_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_forum`
--
ALTER TABLE `tbl_forum`
  MODIFY `forum_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=118;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
