--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: users; Type: TABLE; Schema: public; Owner: glenkurt
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    name character varying(30) NOT NULL,
    first_name character varying(30),
    email character varying(40) NOT NULL,
    password character varying(100) NOT NULL,
    role character varying(30) DEFAULT 'customer'::character varying,
    hotel_id integer
);


ALTER TABLE public.users OWNER TO glenkurt;

--
-- Name: customers_customer_id_seq; Type: SEQUENCE; Schema: public; Owner: glenkurt
--

CREATE SEQUENCE public.customers_customer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.customers_customer_id_seq OWNER TO glenkurt;

--
-- Name: customers_customer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: glenkurt
--

ALTER SEQUENCE public.customers_customer_id_seq OWNED BY public.users.user_id;


--
-- Name: hotels; Type: TABLE; Schema: public; Owner: glenkurt
--

CREATE TABLE public.hotels (
    hotel_id integer NOT NULL,
    name character varying(30) NOT NULL,
    city character varying(30) NOT NULL,
    address character varying(100) NOT NULL,
    description text,
    photo text,
    manager_id integer
);


ALTER TABLE public.hotels OWNER TO glenkurt;

--
-- Name: hotels_hotel_id_seq; Type: SEQUENCE; Schema: public; Owner: glenkurt
--

CREATE SEQUENCE public.hotels_hotel_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hotels_hotel_id_seq OWNER TO glenkurt;

--
-- Name: hotels_hotel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: glenkurt
--

ALTER SEQUENCE public.hotels_hotel_id_seq OWNED BY public.hotels.hotel_id;


--
-- Name: reservations; Type: TABLE; Schema: public; Owner: glenkurt
--

CREATE TABLE public.reservations (
    start_date timestamp without time zone NOT NULL,
    end_date timestamp without time zone NOT NULL,
    options text,
    nb_night integer,
    cost double precision,
    city character varying(30),
    suite_id integer,
    user_id integer,
    reservation_id integer NOT NULL
);


ALTER TABLE public.reservations OWNER TO glenkurt;

--
-- Name: reservations_reservation_id_seq; Type: SEQUENCE; Schema: public; Owner: glenkurt
--

CREATE SEQUENCE public.reservations_reservation_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reservations_reservation_id_seq OWNER TO glenkurt;

--
-- Name: reservations_reservation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: glenkurt
--

ALTER SEQUENCE public.reservations_reservation_id_seq OWNED BY public.reservations.reservation_id;


--
-- Name: suites; Type: TABLE; Schema: public; Owner: glenkurt
--

CREATE TABLE public.suites (
    suite_id integer NOT NULL,
    title character varying(30) NOT NULL,
    image text,
    description text,
    image_gallery text[],
    booking_link text,
    price double precision NOT NULL,
    hotel_id integer
);


ALTER TABLE public.suites OWNER TO glenkurt;

--
-- Name: suites_suite_id_seq; Type: SEQUENCE; Schema: public; Owner: glenkurt
--

CREATE SEQUENCE public.suites_suite_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.suites_suite_id_seq OWNER TO glenkurt;

--
-- Name: suites_suite_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: glenkurt
--

ALTER SEQUENCE public.suites_suite_id_seq OWNED BY public.suites.suite_id;


--
-- Name: hotels hotel_id; Type: DEFAULT; Schema: public; Owner: glenkurt
--

ALTER TABLE ONLY public.hotels ALTER COLUMN hotel_id SET DEFAULT nextval('public.hotels_hotel_id_seq'::regclass);


--
-- Name: reservations reservation_id; Type: DEFAULT; Schema: public; Owner: glenkurt
--

ALTER TABLE ONLY public.reservations ALTER COLUMN reservation_id SET DEFAULT nextval('public.reservations_reservation_id_seq'::regclass);


--
-- Name: suites suite_id; Type: DEFAULT; Schema: public; Owner: glenkurt
--

ALTER TABLE ONLY public.suites ALTER COLUMN suite_id SET DEFAULT nextval('public.suites_suite_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: glenkurt
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.customers_customer_id_seq'::regclass);


--
-- Data for Name: hotels; Type: TABLE DATA; Schema: public; Owner: glenkurt
--

COPY public.hotels (hotel_id, name, city, address, description, photo, manager_id) FROM stdin;
6	Le petit Molière	Pezenas	27 bis avenue Bouillou	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.	assets/photos/hotel4.jpg	13
9	Celestins	Vichy	1 rue de l allier	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.	assets/photos/hotel5.jpg	\N
4	Au Poney Fringuant	Berck	6 rue du port	Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.	assets/photos/hotel3.jpg	\N
3	Le Gremillon	Pulnoy	30 rue des grumaux	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.	assets/photos/hotel1.jpg	\N
10	Le Tanin	Pauillac	15 rue du medoc	Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.	assets/photos/hotel6.jpg	\N
5	Aux deux vaches	Beuzeville la grenier	332 grande rue	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedo do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.	assets/photos/hotel2.jpg	\N
29	Le Miccelli	Villognon	63 boulevard du général de Gaulle 	 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo	assets/photos/hotel10.jpg	\N
\.


--
-- Data for Name: reservations; Type: TABLE DATA; Schema: public; Owner: glenkurt
--

COPY public.reservations (start_date, end_date, options, nb_night, cost, city, suite_id, user_id, reservation_id) FROM stdin;
2022-05-13 22:00:00	2022-05-15 22:00:00	14 15 16	3	99	4	9	14	12
2022-04-22 00:00:00	2022-04-24 00:00:00	du 22 au 24	3	99	10	24	14	14
2022-04-29 00:00:00	2022-04-30 00:00:00		3	99	10	24	14	15
2022-04-21 00:00:00	2022-04-24 00:00:00		3	1034.97	5	12	8	16
2022-04-15 00:00:00	2022-04-18 00:00:00		3	377.96999999999997	9	21	15	17
2022-04-21 00:00:00	2022-04-24 00:00:00		3	677.97	4	8	8	19
2022-04-13 00:00:00	2022-04-15 00:00:00	13 au 15	2	689.98	5	12	8	20
2022-04-13 00:00:00	2022-04-30 00:00:00		17	1699.83	9	18	15	22
2022-04-22 00:00:00	2022-04-25 00:00:00	Champagne !	3	674.97	6	15	8	23
\.


--
-- Data for Name: suites; Type: TABLE DATA; Schema: public; Owner: glenkurt
--

COPY public.suites (suite_id, title, image, description, image_gallery, booking_link, price, hotel_id) FROM stdin;
8	Kilagoratrichobiblique	assets/photos/suite36.jpg	 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo	{assets/photos/suite36.jpg,assets/photos/suite37.jpg,assets/photos/suite37.jpg,assets/photos/sdb2.jpg," assets/photos/suite40"}	www.booking.com	225.99	4
14	Salagou	assets/photos/suite64.jpg	 Vorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo	{assets/photos/suite64.jpg,assets/photos/table.jpg,assets/photos/deco2.jpg,assets/photos/salon3.jpg}	www.booking.com	374.99	6
4	Love	assets/photos/suites3.jpg	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo.	{assets/photos/suites3.jpg,assets/photos/suite2.jpg,assets/photos/salon3.jpg,assets/photos/sdb3.jpg}	www.booking.com	127.99	3
2	Purple	assets/photos/suites5.jpg	Porem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo.	{assets/photos/suites5.jpg,assets/photos/sdb2.jpg,assets/photos/tasse.jpg,assets/photos/suite16.jpg}	www.booking.com	99.99	3
1	Patchouli	assets/photos/suites1.jpg	Porem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet leo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo.	{assets/photos/suites1.jpg,assets/photos/pdj.jpg,assets/photos/hotels10.jpg,assets/photos/pdj2.jpg}	www.booking.com	88.95	3
3	Turf	assets/photos/suites9.jpg	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo.	{assets/photos/suites9.jpg,assets/photos/salon.jpg,assets/photos/suite4.jpg,assets/photos/deco.jpg}	www.booking.com	124.99	3
12	Beuvron-en-Auge	assets/photos/suite53.jpg	 Lorem ipsum doloris sit amety, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo	{assets/photos/suite53.jpg,assets/photos/salonmer2.jpg}	www.booking.com	344.99	5
10	Barfleur	assets/photos/suite52.jpg	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo	{assets/photos/suite52.jpg,assets/photos/salon10.jpg,assets/photos/hotel8.jpg,assets/photos/vueplage.jpg}	www.booking.com	144.94	5
13	Cabourg	assets/photos/suite32.jpg	 Lorem ipsum dolor sit amete, consectetur adipiscing elite. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo	{assets/photos/suite53.jpg,assets/photos/salon8.jpg}	www.booking.com	324.99	5
7	Philoxère	assets/photos/suite6.jpg	 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo	{assets/photos/suite6.jpg,assets/photos/suite2.jpg,assets/photos/salon7.jpg,assets/photos/couloir.jpg}	www.booking.com	799.99	4
11	Le Bec-Hellouin	assets/photos/suite26.jpg	 Porem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo	{assets/photos/suite26.jpg,assets/photos/salon2.jpg}	www.booking.com	144.99	5
6	Mykonos	assets/photos/suite4.jpg	 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo	{assets/photos/suite4.jpg,assets/photos/terassegrece.jpg}	www.booking.com	239.99	4
15	Takatitakité	assets/photos/suite68.jpg	 Borem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo	{assets/photos/suite68.jpg,assets/photos/sdb3.jpg,assets/photos/salon5.jpg,assets/photos/couloir.jpg}	www.booking.com	224.99	6
25	Fronsac	assets/photos/suite29.jpg	 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo	{assets/photos/suite29.jpg,assets/photos/suite16.jpg,assets/photos/tasse.jpg}	www.booking.com	99.95	10
29	Palerma	assets/photos/suite53.jpg	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo.	{assets/photos/suite53.jpg,assets/photos/salon8.jpg}	www.booking.com	88.33	29
20	Tarjoaa	assets/photos/suite69.jpg	 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo	{assets/photos/suite69.jpg,assets/photos/salon7.jpg,assets/photos/sdb3.jpg,assets/photos/suite16.jpg}	www.booking.com	125.99	9
9	Syne	assets/photos/suite24.jpg	 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo	{assets/photos/suite24.jpg,assets/photos/piscine.jpg}	www.booking.com	351	4
21	Eläke	assets/photos/suite26.jpg	 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo	{assets/photos/suite26.jpg,assets/photos/salon10.jpg,assets/photos/sdb2.jpg,assets/photos/deco2.jpg}	www.booking.com	125.99	9
18	Jatkakaa	assets/photos/suite23.jpg	 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo	{assets/photos/suite23.jpg,assets/photos/vueplage.jpg}	www.booking.com	99.99	9
16	Magalas	assets/photos/suite31.jpg	 Corem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo	{assets/photos/suite31.jpg,assets/photos/tasse.jpg,assets/photos/salon7.jpg,assets/photos/couloir.jpg}	www.booking.com	224.99	6
24	Lalande	assets/photos/suite24.jpg	 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo	{assets/photos/suite24.jpg,assets/photos/sdb2.jpg,assets/photos/salon7.jpg}	www.booking.com	99.97	10
22	Pomerol	assets/photos/suite12.jpg	 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo	{assets/photos/suite12.jpg,assets/photos/tasse.jpg,assets/photos/salon7.jpg,assets/photos/pdj.jpg}	www.booking.com	113.99	10
23	Canon-fronsac	assets/photos/suite27.jpg	 Torem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo	{assets/photos/suite27.jpg,assets/photos/salon8.jpg,assets/photos/sdb3.jpg}	www.booking.com	99.99	10
19	Kertomaan	assets/photos/suite41.jpg	 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo	{assets/photos/suite41.jpg,assets/photos/vueplage.jpg}	www.booking.com	99.99	9
17	Valras	assets/photos/suite29.jpg	 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo	{assets/photos/suite29.jpg,assets/photos/suite30.jpg,assets/photos/tasse.jpg,assets/photos/salon4.jpg}	www.booking.com	334.99	6
28	Florencia	assets/photos/suite70.jpg	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo.	{assets/photos/suite70.jpg,assets/photos/piscine.jpg}	www.booking.com	88.33	29
30	Roma	assets/photos/suite12.jpg	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, auctor a placerat scelerisque, vulputate sit amet mi. Ut eget eleifend ante, in hendrerit lorem. Nam imperdiet Dleo ut turpis iaculis, a aliquet ligula ullamcorper. Donec viverra vestibulum nisl, vitae facilisis ex maximus commodo.	{assets/photos/suite12.jpg,assets/photos/salon4.jpg}	www.booking.com	88.33	29
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: glenkurt
--

COPY public.users (user_id, name, first_name, email, password, role, hotel_id) FROM stdin;
8	Glenkurt	Tom	tom@mail.fr	$2b$10$79a6mbEAqvQWpTOwpvKjV.RrdPHUEStRifZFo71aUvooQxCYq/0lS	customer	\N
11	Lardon	Peter	peter@mail.fr	$2b$10$WiypwqGQtePI55bFbPZoZ.K74B6PRFP6tKSQ08DWkPtUAfFnBOrGK	manager	10
13	Tarentino	Quentin	quentin@mail.fr	$2b$10$oobms.9vdXk6l3UEgB/LLOOyoOkpyVWuAYwwWivYlk0CbPFOmP5BS	manager	6
14	Poupou	Julie	julie@mail.fr	$2b$10$jPbU2V3OSa//tPe8vxRALegewXrWT3/cR5Siy5QkyBDW.7ln7b7Oi	customer	\N
15	Ponpon	dawa	dawa@mail.fr	$2b$10$ub4YWdUEUvicCP8xinrsHuwD0rSmn4yDXk9yNPQx95aaw/0gE43pO	customer	\N
16	Admin	admin	admin@mail.fr	$2b$10$x6hc//WPJROqgfuoQyRwc.5iu/2j5O/DJ0H3QyOZKaipcvIHZIhB6	admin	-1
20	Dumphy	Phil	phil@mail.fr	$2b$10$2DLyhcVFECp99OSR3v4XSuAaJwwiBSANxMGaxasJSTepmldlDaM3y	customer	\N
21	Chouss	Foggy	foggy@mail.fr	$2b$10$1vYQBzmaSEZRP15pDn2kn.7qkbsQyBCJB2Cclh4egdUsmERASnMne	customer	\N
22	b	b	boba@mail.fr	$2b$10$ONcmeFA0hGE2OovciTuWhukWwupmn5L0hcUgRSEyCdAyzzcsBFEs6	customer	\N
23	Vibration	Groundation	groundation@mail.fr	$2b$10$iW3cUahY9Z5EqlexpXpz7epHNEZkXnAkUHIZsLrXo1CYlZdaiuw92	customer	\N
9	Bricoman	Bob	bob@mail.fr	$2b$10$cGWXrc4fKdji/BRs/y4bf.0pjaw4OVa/ODlFRdbPkS43Ucf3YNLKO	manager	3
\.


--
-- Name: customers_customer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: glenkurt
--

SELECT pg_catalog.setval('public.customers_customer_id_seq', 23, true);


--
-- Name: hotels_hotel_id_seq; Type: SEQUENCE SET; Schema: public; Owner: glenkurt
--

SELECT pg_catalog.setval('public.hotels_hotel_id_seq', 29, true);


--
-- Name: reservations_reservation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: glenkurt
--

SELECT pg_catalog.setval('public.reservations_reservation_id_seq', 24, true);


--
-- Name: suites_suite_id_seq; Type: SEQUENCE SET; Schema: public; Owner: glenkurt
--

SELECT pg_catalog.setval('public.suites_suite_id_seq', 30, true);


--
-- Name: users customers_pkey; Type: CONSTRAINT; Schema: public; Owner: glenkurt
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT customers_pkey PRIMARY KEY (user_id);


--
-- Name: hotels hotels_pkey; Type: CONSTRAINT; Schema: public; Owner: glenkurt
--

ALTER TABLE ONLY public.hotels
    ADD CONSTRAINT hotels_pkey PRIMARY KEY (hotel_id);


--
-- Name: reservations reservations_pkey; Type: CONSTRAINT; Schema: public; Owner: glenkurt
--

ALTER TABLE ONLY public.reservations
    ADD CONSTRAINT reservations_pkey PRIMARY KEY (reservation_id);


--
-- Name: suites suites_pkey; Type: CONSTRAINT; Schema: public; Owner: glenkurt
--

ALTER TABLE ONLY public.suites
    ADD CONSTRAINT suites_pkey PRIMARY KEY (suite_id);


--
-- Name: reservations reservations_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: glenkurt
--

ALTER TABLE ONLY public.reservations
    ADD CONSTRAINT reservations_customer_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- Name: reservations reservations_suite_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: glenkurt
--

ALTER TABLE ONLY public.reservations
    ADD CONSTRAINT reservations_suite_id_fkey FOREIGN KEY (suite_id) REFERENCES public.suites(suite_id);


--
-- Name: suites suites_hotel_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: glenkurt
--

ALTER TABLE ONLY public.suites
    ADD CONSTRAINT suites_hotel_id_fkey FOREIGN KEY (hotel_id) REFERENCES public.hotels(hotel_id);


--
-- PostgreSQL database dump complete
--

