--------------------------------------------------------
--  File created - Friday-November-27-2020   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table VACC_RECORD
--------------------------------------------------------

  CREATE TABLE "THOMAS"."VACC_RECORD" 
   (	"R_ID" NUMBER(10,0), 
	"P_ID" NUMBER(10,0), 
	"VNAME" VARCHAR2(100 BYTE), 
	"VTIME" NUMBER(10,0), 
	"VDATE" VARCHAR2(30 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
REM INSERTING into THOMAS.VACC_RECORD
SET DEFINE OFF;
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (46,41,'ty',180,'2020-02-18');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (161,142,'typ',180,'2020-11-25');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (274,72,'Dog Flu',180,'2020-01-27');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (42,71,'Canine Parovirus',180,'2019-09-12');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (43,71,'Canine Adenovirus',360,'2019-08-13');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (44,72,'Panleukopenia',180,'2019-07-14');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (45,72,'Rhinotracheitis',360,'2019-06-15');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (47,73,'Canine Leptospira',360,'2019-04-17');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (21,61,'DHPP',365,'2020-01-20');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (22,62,'Bordatella',365,'2020-04-20');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (23,63,'Rabies',180,'2020-03-16');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (24,64,'Leptoporosis',365,'2020-02-07');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (25,65,'Lyme',180,'2020-6-21');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (26,66,'FVRCP',365,'2020-8-23');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (27,67,'Feline Leukemia',180,'2020-07-15');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (28,68,'Feline Leukemia',180,'2020-09-11');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (269,75,'Cat Flu',180,'2020-01-27');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (277,72,'Coronavirus',360,'2020-01-27');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (48,64,'new-2020vaccine',360,'2020-02-14');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (104,103,'electionvaccine',360,'2020-11-06');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (11,268,'Corona-(Flying Type)',180,'2020-01-09');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (35,34,'TYPHUS',360,'2020-02-19');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (70,69,'rt',360,'2020-02-12');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (107,106,'asd',360,'2020-11-19');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (145,143,'typhoid',180,'2020-11-06');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (147,144,'typhoid2',0,null);
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (81,2,'corona-july2020',180,'2020-07-19');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (29,268,'th',360,'2020-02-13');
Insert into THOMAS.VACC_RECORD (R_ID,P_ID,VNAME,VTIME,VDATE) values (146,142,'typhoid2',360,'2020-11-09');
--------------------------------------------------------
--  DDL for Index SYS_C004227
--------------------------------------------------------

  CREATE UNIQUE INDEX "THOMAS"."SYS_C004227" ON "THOMAS"."VACC_RECORD" ("R_ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
