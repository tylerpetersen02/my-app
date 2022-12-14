-- MySQL Script generated by MySQL Workbench
-- Wed Oct 12 17:13:15 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema games_Database
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema games_Database
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `games_Database` DEFAULT CHARACTER SET utf8 ;
USE games_Database ;

-- -----------------------------------------------------
-- Table `games_Database`.`player`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `games_Database`.`player` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `games_Database`.`game_scores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `games_Database`.`game_scores` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `player_id` INT UNSIGNED NOT NULL,
  `game_type` VARCHAR(45) NOT NULL,
  `overall_round` INT UNSIGNED NOT NULL,
  `round_one` INT UNSIGNED NOT NULL,
  `round_two` INT UNSIGNED NOT NULL,
  `round_three` INT UNSIGNED NOT NULL,
  `round_four` INT UNSIGNED NULL,
  `round_five` INT UNSIGNED NULL,
  `round_six` INT UNSIGNED NULL,
  `round_seven` INT UNSIGNED NULL,
  `round_eight` INT UNSIGNED NULL,
  `round_nine` INT UNSIGNED NULL,
  `total_round_score` INT UNSIGNED NOT NULL,
  `comments` VARCHAR(100) NULL,
  `created_timestamp` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_game_scores_player1_idx` (`player_id` ASC),
  CONSTRAINT `fk_game_scores_player1`
    FOREIGN KEY (`player_id`)
    REFERENCES `games_Database`.`player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `games_Database`.`total_wins`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `games_Database`.`total_wins` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `player_id` INT UNSIGNED NOT NULL,
  `golf` INT UNSIGNED NOT NULL,
  `yahtzee` INT UNSIGNED NOT NULL,
  `blokus` INT UNSIGNED NOT NULL,
  `patchwork` INT UNSIGNED NOT NULL,
  `fox_in_the_forest` INT UNSIGNED NOT NULL,
  `chess` INT UNSIGNED NOT NULL,
  `hive` INT UNSIGNED NOT NULL,
  `total` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_total_wins_player1_idx` (`player_id` ASC),
  CONSTRAINT `fk_total_wins_player1`
    FOREIGN KEY (`player_id`)
    REFERENCES `games_Database`.`player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET FOREIGN_KEY_CHECKS=1;
SET UNIQUE_CHECKS=1;
