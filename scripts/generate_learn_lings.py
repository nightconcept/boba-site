import os
import re
from pathlib import Path

# --- Constants for Paths ---
# Using r-strings as requested.
# The script is expected to be in `boba-site/scripts/`.
# Path.resolve() makes the paths absolute.
PROJECT_ROOT = Path(__file__).parent.parent.resolve()

# Path to the markdown files for the lessons.
BOBA_SITE_LEARN_DIR = PROJECT_ROOT / r"src/content/docs/learn"

# Path to the bobalings exercises. This is one directory up from the boba-site project.
BOBALINGS_EXERCISES_DIR = PROJECT_ROOT.parent / r"bobalings/exercises"

# Path to store the generated files.
OUTPUT_DIR = PROJECT_ROOT / r"project/learn-lings"

def strip_frontmatter(text: str) -> str:
    """Removes YAML frontmatter from the beginning of a string."""
    frontmatter_pattern = re.compile(r"^---\s*$.*?^---\s*$\n?", re.MULTILINE | re.DOTALL)
    return frontmatter_pattern.sub("", text)

def generate_learn_lings_files():
    """
    Generates combined files for AI evaluation.
    Each file contains a lesson from boba-site and corresponding bobalings exercises.
    """
    if not BOBALINGS_EXERCISES_DIR.is_dir():
        print(f"Error: Bobalings exercises directory not found at '{BOBALINGS_EXERCISES_DIR}'")
        print("Please ensure the 'bobalings' repository is cloned next to the 'boba-site' repository.")
        return

    OUTPUT_DIR.mkdir(exist_ok=True)
    print(f"Output will be saved to '{OUTPUT_DIR}'")

    learn_files = sorted(BOBA_SITE_LEARN_DIR.glob("*.mdx"))

    for learn_file in learn_files:
        print(f"Processing '{learn_file.name}'...")

        match = re.match(r"(\d+)-.*\.mdx", learn_file.name)
        if not match:
            print(f"  Skipping '{learn_file.name}' as it does not match chapter format '##-name.mdx'")
            continue

        chapter_number = match.group(1)

        lesson_content = learn_file.read_text(encoding="utf-8")
        lesson_content_stripped = strip_frontmatter(lesson_content)

        combined_content = f"# Lesson: {learn_file.stem}\n\n"
        combined_content += lesson_content_stripped.strip()
        combined_content += f"\n\n{'='*80}\n\n"
        combined_content += f"# Bobalings Exercises for Chapter {chapter_number}\n\n"

        exercise_dirs = [d for d in BOBALINGS_EXERCISES_DIR.iterdir() if d.is_dir() and d.name.startswith(f"{chapter_number}_")]

        found_exercises = False
        if not exercise_dirs:
            print(f"  Warning: No exercise directories found for chapter {chapter_number} in '{BOBALINGS_EXERCISES_DIR}'")
        else:
            for exercise_dir in sorted(exercise_dirs):
<<<<<<< Updated upstream
                exercise_files = sorted(exercise_dir.glob("**/*.boba"))
=======
                exercise_files = sorted(exercise_dir.glob("*.boba"))
>>>>>>> Stashed changes
                if not exercise_files:
                    continue

                found_exercises = True
                for exercise_file in exercise_files:
                    relative_path = exercise_file.relative_to(BOBALINGS_EXERCISES_DIR.parent)
                    combined_content += f"--- Exercise: {relative_path} ---\n\n"
                    try:
                        combined_content += exercise_file.read_text(encoding="utf-8")
                        combined_content += "\n\n"
                    except Exception as e:
                        print(f"  Error reading '{exercise_file}': {e}")

        if not found_exercises:
            print(f"  Warning: No '.boba' exercise files found for chapter {chapter_number}.")
            combined_content += "No exercises found for this chapter."

        output_filename = learn_file.stem + ".txt"
        output_path = OUTPUT_DIR / output_filename
        output_path.write_text(combined_content, encoding="utf-8")
        print(f"  -> Generated '{output_path.relative_to(PROJECT_ROOT)}'")

if __name__ == "__main__":
    generate_learn_lings_files() 