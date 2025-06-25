import os
import re

def combine_mdx_files():
    """
    Combines all MDX files from 'src/content/docs/reference' into a single
    markdown file in 'project/boba-syntax.md', stripping all front matter.
    """
    reference_dir = os.path.join('src', 'content', 'docs', 'reference')
    output_file = os.path.join('project', 'boba-syntax.md')
    
    mdx_files = sorted([f for f in os.listdir(reference_dir) if f.endswith('.mdx')])
    
    combined_content = ""
    
    for file_name in mdx_files:
        file_path = os.path.join(reference_dir, file_name)
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            # Remove front matter using regex
            content_without_front_matter = re.sub(r'^---.*?---\s*', '', content, flags=re.DOTALL)
            combined_content += content_without_front_matter + "\n"
            
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(combined_content)
        
    print(f"Successfully combined {len(mdx_files)} files into {output_file}")

if __name__ == "__main__":
    combine_mdx_files()