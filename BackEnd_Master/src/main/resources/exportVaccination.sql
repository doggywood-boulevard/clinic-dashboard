--------------------------------------------------------
--  File created - Friday-November-27-2020   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table VACCINATION
--------------------------------------------------------

  CREATE TABLE "THOMAS"."VACCINATION" 
   (	"V_ID" NUMBER(10,0), 
	"V_NAME" VARCHAR2(255 CHAR), 
	"P_TYPE" NUMBER(10,0), 
	"V_TIME" NUMBER(10,0)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
REM INSERTING into THOMAS.VACCINATION
SET DEFINE OFF;
--------------------------------------------------------
--  DDL for Index SYS_C004310
--------------------------------------------------------

  CREATE UNIQUE INDEX "THOMAS"."SYS_C004310" ON "THOMAS"."VACCINATION" ("V_ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  Constraints for Table VACCINATION
--------------------------------------------------------

  ALTER TABLE "THOMAS"."VACCINATION" MODIFY ("V_ID" NOT NULL ENABLE);
  ALTER TABLE "THOMAS"."VACCINATION" ADD PRIMARY KEY ("V_ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
