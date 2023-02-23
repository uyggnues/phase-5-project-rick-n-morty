# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_22_200208) do
  create_table "character_episodes", force: :cascade do |t|
    t.integer "charcter_id", null: false
    t.integer "episode_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["charcter_id"], name: "index_character_episodes_on_charcter_id"
    t.index ["episode_id"], name: "index_character_episodes_on_episode_id"
  end

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.string "species"
    t.string "gender"
    t.string "image"
    t.string "character_class"
    t.string "origin"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "episodes", force: :cascade do |t|
    t.string "name"
    t.string "air_date"
    t.string "episode"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "fav_characters", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "character_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_fav_characters_on_character_id"
    t.index ["user_id"], name: "index_fav_characters_on_user_id"
  end

  create_table "fav_teams", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "team_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["team_id"], name: "index_fav_teams_on_team_id"
    t.index ["user_id"], name: "index_fav_teams_on_user_id"
  end

  create_table "team_members", force: :cascade do |t|
    t.integer "team_id", null: false
    t.integer "character_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_team_members_on_character_id"
    t.index ["team_id"], name: "index_team_members_on_team_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "character_episodes", "charcters"
  add_foreign_key "character_episodes", "episodes"
  add_foreign_key "fav_characters", "characters"
  add_foreign_key "fav_characters", "users"
  add_foreign_key "fav_teams", "teams"
  add_foreign_key "fav_teams", "users"
  add_foreign_key "team_members", "characters"
  add_foreign_key "team_members", "teams"
end
