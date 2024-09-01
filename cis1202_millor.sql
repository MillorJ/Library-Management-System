-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 23, 2023 at 11:06 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cis1202_prefi_millor`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `bookID` int(10) UNSIGNED NOT NULL,
  `bookTitle` varchar(100) NOT NULL,
  `bookAuthor` varchar(100) NOT NULL,
  `bookPublisher` varchar(100) NOT NULL,
  `yearPublished` int(10) UNSIGNED NOT NULL,
  `bookPages` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`bookID`, `bookTitle`, `bookAuthor`, `bookPublisher`, `yearPublished`, `bookPages`) VALUES
(1, 'Modern Javascript: Develop and Design', 'Larry Ullman', 'Peachpit Press', 2012, 516),
(2, 'The 48 Laws of Power', 'Robert Greene', 'Penguin Books', 1998, 454),
(3, 'Rich Dad Poor Dad', 'Robert T. Kiyosaki', 'Warner Books', 1997, 207),
(4, 'The Subtle Not Art of Giving a Fuck', 'Mark Manson', 'HarperCollins Publishers', 2016, 224),
(5, 'Vampire: The Masquerade – 20th Anniversary Edition', 'Achilli, J. et al.', 'White Wolf Publishing, Inc.', 2011, 529);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`bookID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `bookID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
