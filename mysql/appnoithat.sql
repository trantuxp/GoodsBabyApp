-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 01, 2022 lúc 09:49 AM
-- Phiên bản máy phục vụ: 10.4.17-MariaDB
-- Phiên bản PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `appnoithat`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitietdh`
--

CREATE TABLE `chitietdh` (
  `iddh` int(11) NOT NULL,
  `idsp` int(11) NOT NULL,
  `tensanpham` varchar(500) DEFAULT NULL,
  `soluong` int(11) NOT NULL,
  `dongia` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cuahang`
--

CREATE TABLE `cuahang` (
  `tenshop` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `diachi` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sodt` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `cuahang`
--

INSERT INTO `cuahang` (`tenshop`, `diachi`, `sodt`, `email`) VALUES
('ATF SHOP', '10 Nguyen Thi Thap', '0845195357', 'anhvstu@gmail.com');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhmuc`
--

CREATE TABLE `danhmuc` (
  `id` int(11) NOT NULL,
  `tendanhmuc` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `anh` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ngay` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `danhmuc`
--

INSERT INTO `danhmuc` (`id`, `tendanhmuc`, `anh`, `ngay`) VALUES
(1, 'Ghế', 'https://png.pngtree.com/png-clipart/20190920/original/pngtree-wooden-backrest-chair-png-image_4611298.jpg', '2020-12-21 00:00:00'),
(2, 'Bàn ăn', 'https://www.mdfuni.com/wp-content/uploads/2018/07/617.1.png', '2020-12-21 00:00:00'),
(3, 'Giường ngủ', 'http://noithatchangson.vn/public/upload/products/2014/08/18/upload/19203be42ab60d4e88833fcf190e98ded9d1675e-14083352080217.jpg', '2020-12-21 00:00:00'),
(4, 'Sofa', 'https://www.goxanh.vn/image/cache/data/go-xanh/hinh-anh-ghe-sofa-don-bang-dai-600x600.jpg', '2020-12-21 00:00:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `donhang`
--

CREATE TABLE `donhang` (
  `id` int(11) NOT NULL,
  `idkhachhang` int(11) DEFAULT NULL,
  `ngay` date DEFAULT current_timestamp(),
  `tenuser` varchar(500) NOT NULL,
  `diachi` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sodt` int(11) NOT NULL,
  `email` varchar(5000) NOT NULL,
  `loinhan` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tongsanpham` int(11) DEFAULT NULL,
  `tongtien` double DEFAULT NULL,
  `trangthai` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `donhang`
--

INSERT INTO `donhang` (`id`, `idkhachhang`, `ngay`, `tenuser`, `diachi`, `sodt`, `email`, `loinhan`, `tongsanpham`, `tongtien`, `trangthai`) VALUES
(1, 2, '2020-12-22', '', '26 Huỳnh Văn Nghệ', 1264607869, 'tranxp34878@gmail.com', '', 1, 18900000, 4),
(2, 2, '2020-12-23', '', '26 Huỳnh Văn Nghệ', 1264607869, 'tranxp34878@gmail.com', '', 3, 57765000, 3),
(3, 2, '2020-10-31', '', '26 Huỳnh Văn Nghệ', 1264607869, 'tranxp34878@gmail.com', '', 4, 87765000, 2),
(4, 2, '2020-11-01', '', '26 Huỳnh Văn Nghệ', 1264607869, 'tranxp34878@gmail.com', '', 2, 32400000, 4),
(5, 2, '2020-12-10', 'Trần Quốc Tú', '26 Huỳnh Văn Nghệ', 1264607869, 'tranxp34878@gmail.com', '', 1, 765000, 2),
(6, 2, '2020-12-22', 'Trần Quốc Tú', '26 Huỳnh Văn Nghệ', 1264607869, 'tranxp34878@gmail.com', '', 1, 765000, 1),
(7, 2, '2020-12-31', 'Trần Quốc Tú', '26 Huỳnh Văn Nghệ', 1264607869, 'tranxp34878@gmail.com', '', 2, 19000000, 1),
(8, 2, '2020-12-31', 'Trần Quốc Tú', '26 Huỳnh Văn Nghệ', 1264607869, 'tranxp34878@gmail.com', '', 1, 18900000, 1),
(9, 2, '2020-12-31', 'Trần Quốc Tú', '26 Huỳnh Văn Nghệ', 1264607869, 'tranxp34878@gmail.com', '', 1, 765000, 1),
(10, 2, '2021-01-08', 'Trần Quốc Tú', '26 Huỳnh Văn Nghệ', 1264607869, 'tranxp34878@gmail.com', '', 1, 18900000, 1),
(11, 2, '2021-01-08', 'Trần Quốc Tú', '26 Huỳnh Văn Nghệ', 1264607869, 'tranxp34878@gmail.com', '', 0, 0, 1),
(12, 2, '2021-01-09', 'Trần Quốc Tú', '26 Huỳnh Văn Nghệ', 1264607869, 'tranxp34878@gmail.com', '', 1, 9000000, 1),
(13, 2, '2021-01-10', 'Trần Quốc Tú', '26 Huỳnh Văn Nghệ', 1264607869, 'tranxp34878@gmail.com', '', 8, 178665000, 1),
(14, 2, '2021-01-10', 'Trần Quốc Tú', '26 Huỳnh Văn Nghệ', 1264607869, 'tranxp34878@gmail.com', '', 1, 18900000, 1),
(15, 2, '2021-01-10', 'Trần Quốc Tú', '26 Huỳnh Văn Nghệ', 1264607869, 'tranxp34878@gmail.com', '', 1, 18900000, 1),
(16, 2, '2021-01-10', 'Trần Quốc Tú', '26 Huỳnh Văn Nghệ', 1264607869, 'tranxp34878@gmail.com', '', 1, 18900000, 1),
(17, 2, '2021-01-10', 'Trần Quốc Tú', '26 Huỳnh Văn Nghệ', 1264607869, 'tranxp34878@gmail.com', '', 1, 765000, 1),
(18, 2, '2021-01-14', 'Trần Quốc Tú', '26 Huỳnh Văn Nghệ', 1264607869, 'tranxp34878@gmail.com', '', 2, 25200000, 1),
(19, 2, '2021-01-14', 'Trần Quốc Tú', '26 Huỳnh Văn Nghệ', 1264607869, 'tranxp34878@gmail.com', '', 1, 15300000, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giohang`
--

CREATE TABLE `giohang` (
  `id` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `idsp` int(11) NOT NULL,
  `tenhang` varchar(30) DEFAULT NULL,
  `soluong` int(11) DEFAULT NULL,
  `anh` varchar(500) DEFAULT NULL,
  `gia` int(11) DEFAULT NULL,
  `mota` varchar(1000) DEFAULT NULL,
  `ngay` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `giohang`
--

INSERT INTO `giohang` (`id`, `iduser`, `idsp`, `tenhang`, `soluong`, `anh`, `gia`, `mota`, `ngay`) VALUES
(1, 1, 2, 'xe tai', 100, 'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg', 86000, 'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg', '2022-11-30 22:54:39'),
(2, 1, 2, 'xe tai3', 100, 'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg', 86000, 'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg', '2022-11-30 22:54:43'),
(3, 2, 3, 'xe tai1', 20, 'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg', 100000, 'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg', '2022-11-30 22:55:18'),
(4, 2, 3, 'xe tai2', 20, 'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg', 100000, 'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg', '2022-11-30 22:55:22');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hanghoa`
--

CREATE TABLE `hanghoa` (
  `id` int(11) NOT NULL,
  `tenhang` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `soluong` int(11) NOT NULL,
  `dongia` double NOT NULL,
  `anh` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ngay` date DEFAULT current_timestamp(),
  `mota` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `iddanhmuc` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `hanghoa`
--

INSERT INTO `hanghoa` (`id`, `tenhang`, `soluong`, `dongia`, `anh`, `ngay`, `mota`, `iddanhmuc`) VALUES
(2, 'Bàn ăn kính - BA020.007A11', 100, 6000000, 'https://www.nhaxinh.com/photo/6349/ghe_an_co_tay_porto.jpg', '2020-12-21', '- Cạnh bàn được bo tròn, an toàn cho người sử dụng - kể cả với các gia đình có trẻ nhỏ.\r\n\r\n- Mặt bàn có vân gỗ đẹp tự nhiên.\r\n\r\n- Dễ vệ sinh sau khi dùng bữa.\r\n\r\n- Kiểu dáng đơn giản mà hiện đại, thanh lịch.', 2),
(3, 'Giường ngủ TARY', 95, 3750000, 'https://homeoffice.com.vn/images/detailed/23/gn68021-giuong-ngu-kich-thuoc-1m4-02.jpg?t=1604472093', '2020-12-21', '- Với chất liệu gỗ cao su tiêu chuẩn AA sơn PU hoàn thiện kết hợp với khung chân sắt lắp ráp sơn tĩnh điện chắc chắn, kiểu dáng giường theo kiểu giường bệt Nhật Bản với chiều cao phủ bì 22cm kết hợp với nệm mang đến chiếc giường phòng ngủ đơn giản và đẹp mắt.', 3),
(6, 'Bàn ăn Ceramic - HT83001-120[KL-99]', 100, 18000000, 'https://www.nhaxinh.com/photo/6349/ghe_an_co_tay_porto.jpg', '2020-12-16', '- Cạnh bàn được bo tròn, an toàn cho người sử dụng - kể cả với các gia đình có trẻ nhỏ.\r\n\r\n- Mặt bàn có vân gỗ đẹp tự nhiên.\r\n\r\n- Dễ vệ sinh sau khi dùng bữa.\r\n\r\n- Kiểu dáng đơn giản mà hiện đại, thanh lịch.', 2),
(7, 'Giường ngủ - GBD019.005A', 100, 30000000, 'https://demo037022.web30s.vn/datafiles/32573/upload/thumb_images/bedroom/GBD019_005A-2.jpg?t=1612258344', '2020-12-21', '- Với chất liệu gỗ cao su tiêu chuẩn AA sơn PU hoàn thiện kết hợp với khung chân sắt lắp ráp sơn tĩnh điện chắc chắn, kiểu dáng giường theo kiểu giường bệt Nhật Bản với chiều cao phủ bì 22cm kết hợp với nệm mang đến chiếc giường phòng ngủ đơn giản và đẹp mắt.', 3),
(8, 'Sofa bộ Hoàn Mỹ - LAZIO-HM2', 20, 68000000, 'https://bizweb.dktcdn.net/thumb/large/100/410/706/products/lazio-hm2-g3-3-1.jpg?v=1606796585030', '2020-12-21', '- Sở hữu kiểu dáng đơn giản, màu xám trung tính phù hợp cho nhiều không gian phòng khách căn hộ, nhà phố hay ghế sofa tiếp khách tại các văn phòng, công ty. Với kích thước dài 170cm tư thế ngồi thoải mái, nệm dày chất lượng cao, vải bố xám đẹp mắt dễ phối vào từng không gian.', 4),
(19, 'Sofa 121 3 chỗ hiện đại da nâu', 100, 56000000, 'https://i0.wp.com/mysofa.vn/wp-content/uploads/2019/12/sofa-da-dang-vang-dai-MyS-1912311.jpg?fit=750%2C600&ssl=1', '2021-01-11', '- Sở hữu kiểu dáng đơn giản, màu xám trung tính phù hợp cho nhiều không gian phòng khách căn hộ, nhà phố hay ghế sofa tiếp khách tại các văn phòng, công ty. Với kích thước dài 170cm tư thế ngồi thoải mái, nệm dày chất lượng cao, vải bố xám đẹp mắt dễ phối vào từng không gian.', 4),
(20, 'Sofa Twoback 3 chỗ hiện đại vải Diego', 100, 33000000, 'https://www.nhaxinh.com/photo/5880/sofa_twoback_2,5_cho.jpg', '2021-01-11', '- Sở hữu kiểu dáng đơn giản, màu xám trung tính phù hợp cho nhiều không gian phòng khách căn hộ, nhà phố hay ghế sofa tiếp khách tại các văn phòng, công ty. Với kích thước dài 170cm tư thế ngồi thoải mái, nệm dày chất lượng cao, vải bố xám đẹp mắt dễ phối vào từng không gian.', 4),
(21, 'Bàn ăn gỗ Sen', 100, 13000000, 'https://tubaydo.com/wp-content/uploads/2019/06/bo-ban-ghe-an-cham-sen-12.jpg', '2021-01-11', '- Cạnh bàn được bo tròn, an toàn cho người sử dụng - kể cả với các gia đình có trẻ nhỏ.\r\n\r\n- Mặt bàn có vân gỗ đẹp tự nhiên.\r\n\r\n- Dễ vệ sinh sau khi dùng bữa.\r\n\r\n- Kiểu dáng đơn giản mà hiện đại, thanh lịch. ', 2),
(22, 'Bàn ăn Dubai 1m8', 10, 9000000, 'https://www.nhaxinh.com/photo/5896/ban-an-dubai-1m8.jpg', '2021-01-11', '- Cạnh bàn được bo tròn, an toàn cho người sử dụng - kể cả với các gia đình có trẻ nhỏ.\r\n\r\n- Mặt bàn có vân gỗ đẹp tự nhiên.\r\n\r\n- Dễ vệ sinh sau khi dùng bữa.\r\n\r\n- Kiểu dáng đơn giản mà hiện đại, thanh lịch. ', 2),
(23, 'Bàn ăn Jazz 2m', 100, 17000000, 'https://product.hstatic.net/200000017298/product/1000-san-pham-nha-xinh_55__7c949d9db7c34190977813729855d9dc_master.jpg', '2021-01-11', '- Cạnh bàn được bo tròn, an toàn cho người sử dụng - kể cả với các gia đình có trẻ nhỏ.\r\n\r\n- Mặt bàn có vân gỗ đẹp tự nhiên.\r\n\r\n- Dễ vệ sinh sau khi dùng bữa.\r\n\r\n- Kiểu dáng đơn giản mà hiện đại, thanh lịch. ', 2),
(24, 'Giường ngủ bọc vải Pio 1m8', 100, 28000000, 'https://www.nhaxinh.com/photo/5238/giuong_pio.jpg', '2021-01-11', '- Với chất liệu gỗ cao su tiêu chuẩn AA sơn PU hoàn thiện kết hợp với khung chân sắt lắp ráp sơn tĩnh điện chắc chắn, kiểu dáng giường theo kiểu giường bệt Nhật Bản với chiều cao phủ bì 22cm kết hợp với nệm mang đến chiếc giường phòng ngủ đơn giản và đẹp mắt.', 3),
(25, 'Giường ngủ gỗ Dixie 1m8', 50, 53000000, 'http://nhaxinh.com/photo/5797/giuong--dixie-1m8_-_copy.jpg', '2021-01-11', '- Với chất liệu gỗ cao su tiêu chuẩn AA sơn PU hoàn thiện kết hợp với khung chân sắt lắp ráp sơn tĩnh điện chắc chắn, kiểu dáng giường theo kiểu giường bệt Nhật Bản với chiều cao phủ bì 22cm kết hợp với nệm mang đến chiếc giường phòng ngủ đơn giản và đẹp mắt.', 3),
(26, 'Giường ngủ gỗ Bụi 1m6', 100, 17000000, 'https://www.nhaxinh.com/photo/5869/giuong_bui_1.6m_vai_foster_1.jpg', '2021-01-11', '- Cạnh bàn được bo tròn, an toàn cho người sử dụng - kể cả với các gia đình có trẻ nhỏ.\r\n\r\n- Mặt bàn có vân gỗ đẹp tự nhiên.\r\n\r\n- Dễ vệ sinh sau khi dùng bữa.\r\n\r\n- Kiểu dáng đơn giản mà hiện đại, thanh lịch. ', 3),
(42, 'Ráp tàu cướp biển chim cánh cụt 1240', 20, 185000, 'https://dochoitreem.com/wp-content/uploads/2022/04/Rap-tau-cuop-bien-hcim-canh-cut-1240-500x480.jpg', NULL, 'Sản phẩm được làm từ chất liệu an toàn không gây độc hại cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.', 1),
(43, 'Lắp ráp robot và xe 2 in 1 7019', 20, 185000, 'https://dochoitreem.com/wp-content/uploads/2022/07/Lap-rap-robot-va-xe-2-in-1-7019-500x480.jpg', '2022-11-30', 'Sản phẩm được làm từ chất liệu an toàn không gây độc hại cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.', 1),
(44, 'Lắp ráp tàu chiến đấu 8 in 1 42022', 20, 185000, 'https://dochoitreem.com/wp-content/uploads/2022/01/Lap-rap-tau-chien-dau-8-in-1-42022-500x480.jpg', '2022-11-30', 'Sản phẩm được làm từ chất liệu an toàn không gây độc hại cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.', 1),
(45, 'Lắp ráp cho bé D373', 20, 185000, 'https://dochoitreem.com/wp-content/uploads/2022/01/Lap-rap-cho-be-D373-500x480.jpg', '2022-11-30', 'Sản phẩm được làm từ chất liệu an toàn không gây độc hại cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.', 1),
(46, 'Lắp ráp lâu đài Moira 20037Q', 20, 185000, 'https://dochoitreem.com/wp-content/uploads/2021/05/Lap-rap-lau-dai-Moira-20037Q-500x480.jpg', '2022-11-30', 'Sản phẩm được làm từ chất liệu an toàn không gây độc hại cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.', 1),
(47, 'Xe tải đỏ 899-2H', 20, 185000, 'https://dochoitreem.com/wp-content/uploads/2022/09/Xe-tai-do-889-2H-500x480.jpg', '2022-11-30', 'Sản phẩm được làm từ chất liệu an toàn không gây độc hại cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.', 1),
(48, 'Lắp ráp Dream 6645B', 20, 85, 'https://dochoitreem.com/wp-content/uploads/2020/12/Lap-rap-Dream-6645B-500x480.jpg', '2022-12-01', 'Sản phẩm được làm từ chất liệu an toàn không gây độc hại cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan`
--

CREATE TABLE `taikhoan` (
  `id` int(11) NOT NULL,
  `tendn` varchar(500) NOT NULL,
  `matkhau` varchar(500) NOT NULL,
  `ngay` date DEFAULT current_timestamp(),
  `email` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sodt` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `diachi` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `anh` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'adn.jpg',
  `vaitro` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT '1',
  `trangthai` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `taikhoan`
--

INSERT INTO `taikhoan` (`id`, `tendn`, `matkhau`, `ngay`, `email`, `sodt`, `diachi`, `anh`, `vaitro`, `trangthai`) VALUES
(1, 'admin', '123', '2020-12-22', 'tranxp34878@gmail.com', '1264607869', '26 Huỳnh Văn Nghệ', 'adn.jpg', '0', ''),
(2, 'tu', '123', '2020-12-22', 'tranxp34878@gmail.com', '1264607869', '26 Huỳnh Văn Nghệ', 'adn.jpg', '1', ''),
(3, 'anh', '123', '0000-00-00', 'dangleloi102@gmail.com', '1264607869', '100 Huỳnh Văn Nghệ', 'adn.jpg', '0', ''),
(4, 'tu1', '123', '0000-00-00', 'tranxp34878@gmail.com', '1264607869', '100 Huỳnh Văn Nghệ', 'adn.jpg', '1', ''),
(5, 'tu102', '123', '0000-00-00', 'trantuxp34878@gmail.com', '1264607869', '26 Huỳnh Văn Nghệ', 'adn.jpg', '1', ''),
(6, 'tqtu', '123', '0000-00-00', 'tqtu.19it2@vku.udn.vn', '1264607869', '26 Huỳnh Văn Nghệ', 'adn.jpg', '1', ''),
(7, 'admin1', '123', '0000-00-00', 'trantuxp34878@gmail.com', '1264607869', '26Huỳnh Văn Nghệ', 'adn.jpg', '1', ''),
(8, 'tuananh', '123', '2020-12-23', 'dangleloi102@gmail.com', '1264607869', '26 Huỳnh Văn Nghệ', 'adn.jpg', '1', ''),
(9, 'p', '123', '2020-12-23', 'dangleloi102@gmail.com', '1264607869', '26Huỳnh Văn Nghệ', 'adn.jpg', '1', ''),
(12, 'tranquoctu', '123', '2021-05-27', NULL, NULL, NULL, 'adn.jpg', '1', NULL),
(14, 'anhtuan', '123', '2021-05-30', NULL, NULL, NULL, 'adn.jpg', '1', NULL),
(15, 'avc', '123', '2021-05-30', NULL, NULL, NULL, 'adn.jpg', '1', NULL),
(16, 'tai', '129', '2021-05-31', NULL, NULL, NULL, 'adn.jpg', '1', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tintuc`
--

CREATE TABLE `tintuc` (
  `id` int(11) NOT NULL,
  `tentt` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mota` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `anh` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tintuc`
--

INSERT INTO `tintuc` (`id`, `tentt`, `mota`, `anh`) VALUES
(1, 'CÂU CHUYỆN GIÁO DỤC TỪ CÁCH MUA ĐỒ CHƠI CHO CON', 'Mỗi năm một lần, chị Hoa (Hà Nội) đều đưa bé Nam đến làng trẻ Hữu Nghị để mang đồ chơi của mình tặng cho các bạn nhỏ khuyết tật, như một cách để giáo dục...\r\n      ', 'https://dochoitreem.com/wp-content/uploads/2016/02/5956x640.jpg'),
(2, 'LÀM THẾ NÀO ĐỂ DẠY TRẺ THÓI QUEN TỰ LẬP TỪ BÉ', 'Trẻ khi còn nhỏ nếu được ba mẹ nuông chiều sẽ nảy sinh tính ỷ lại, trở nên bướng bỉnh và không nghe lời. Vì vậy, để giáo dục trẻ một cách tốt...\r\n     ', 'https://dochoitreem.com/wp-content/uploads/2015/09/lam-the-nao-de-day-tre-tu-tap-tu-nho-1.jpg'),
(3, 'NHỮNG MẢNG SÁNG TRONG TÍNH CÁCH TRẺ QUA CHỌN ĐỒ CHƠI', 'Lựa chọn đúng loại đồ chơi có ích nhất cho bé thì cha mẹ nào cũng muốn nhưng không hẳn lúc nào cũng được như ý, thế nên đôi khi mua về mà bé còn nhỏ quá ...\r\n', 'https://dochoitreem.com/wp-content/uploads/2016/02/nhung-mang-sang-trong-tinh-cach-tre-qua-chon-do-choi-2.jpg');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `chitietdh`
--
ALTER TABLE `chitietdh`
  ADD KEY `iddh` (`iddh`),
  ADD KEY `idsp` (`idsp`);

--
-- Chỉ mục cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `donhang`
--
ALTER TABLE `donhang`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idkhachhang` (`idkhachhang`);

--
-- Chỉ mục cho bảng `giohang`
--
ALTER TABLE `giohang`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `hanghoa`
--
ALTER TABLE `hanghoa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `iddanhmuc` (`iddanhmuc`);

--
-- Chỉ mục cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tintuc`
--
ALTER TABLE `tintuc`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `donhang`
--
ALTER TABLE `donhang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT cho bảng `giohang`
--
ALTER TABLE `giohang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `hanghoa`
--
ALTER TABLE `hanghoa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `tintuc`
--
ALTER TABLE `tintuc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `chitietdh`
--
ALTER TABLE `chitietdh`
  ADD CONSTRAINT `chitietdh_ibfk_1` FOREIGN KEY (`iddh`) REFERENCES `donhang` (`id`),
  ADD CONSTRAINT `chitietdh_ibfk_2` FOREIGN KEY (`idsp`) REFERENCES `hanghoa` (`id`);

--
-- Các ràng buộc cho bảng `donhang`
--
ALTER TABLE `donhang`
  ADD CONSTRAINT `donhang_ibfk_1` FOREIGN KEY (`idkhachhang`) REFERENCES `taikhoan` (`id`);

--
-- Các ràng buộc cho bảng `hanghoa`
--
ALTER TABLE `hanghoa`
  ADD CONSTRAINT `hanghoa_ibfk_1` FOREIGN KEY (`iddanhmuc`) REFERENCES `danhmuc` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
