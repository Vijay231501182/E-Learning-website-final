import React from 'react'
import './Pages.css'
// import { useNavigate } from 'react-router-dom'
import VideoPlayer from '../Player'

export const Page1 = () => {
    return (
        <div className="chapter-content">
            <h1>Chapter 1: What is an Operating System?</h1>

            <section className="learning-section">
                <h2>📌 Definition and Introduction to OS</h2>
                <p>An <strong>Operating System (OS)</strong> is system software that acts as an intermediary between computer hardware and users. It manages hardware resources, provides essential services for software applications, and ensures a smooth computing experience.</p>
                <p>Without an OS, every program would need to handle hardware operations independently, making computing inefficient and complex. Examples of popular operating systems include <strong>Windows, macOS, Linux, Android, and iOS</strong>.</p>
            </section>

            <section className="learning-section">
                <h2>🌍 The Importance of Operating Systems</h2>
                <p>Operating systems are crucial because:</p>
                <ul>
                    <li>They enable users to interact with computers without needing deep hardware knowledge.</li>
                    <li>They allow multiple applications to run simultaneously.</li>
                    <li>They provide a consistent environment for software development.</li>
                    <li>They ensure stability, security, and performance across different devices.</li>
                </ul>
                <p>Without an OS, modern computing—from smartphones to supercomputers—would not be possible.</p>
            </section>

            <section className="learning-section">
                <h2>⚙️ Resource Management and Abstraction</h2>
                <p>An OS efficiently manages hardware resources such as:</p>
                <ul>
                    <li><strong>CPU (Processor):</strong> Allocates computing power to different tasks.</li>
                    <li><strong>Memory (RAM):</strong> Ensures programs have enough space to run.</li>
                    <li><strong>Storage (HDD/SSD):</strong> Manages file systems and data access.</li>
                    <li><strong>Input/Output (I/O) Devices:</strong> Controls peripherals like keyboards, mice, and printers.</li>
                </ul>
                <p><strong>Abstraction</strong> simplifies complexity—users and applications don't need to know hardware details. Instead, the OS provides easy-to-use interfaces (APIs).</p>
            </section>

            <section className="learning-section">
                <h2>🔒 Security and Protection</h2>
                <p>The OS ensures:</p>
                <ul>
                    <li><strong>User Authentication:</strong> Verifies identities via passwords/biometrics.</li>
                    <li><strong>Access Control:</strong> Restricts unauthorized file or system access.</li>
                    <li><strong>Process Isolation:</strong> Prevents one program from crashing the entire system.</li>
                    <li><strong>Malware Defense:</strong> Includes firewalls, encryption, and antivirus integration.</li>
                </ul>
                <p>Security is critical in today's connected world, where cyber threats are constantly evolving.</p>
            </section>

            <section className="learning-section">
                <h2>📈 Scalability and Performance Challenges</h2>
                <p>As computing needs grow, an OS must:</p>
                <ul>
                    <li>Handle multiple users and tasks efficiently.</li>
                    <li>Optimize resource usage to prevent slowdowns.</li>
                    <li>Support new hardware (e.g., multi-core CPUs, GPUs, SSDs).</li>
                    <li>Adapt to cloud computing and distributed systems.</li>
                </ul>
                <p>Performance tuning (e.g., caching, scheduling algorithms) is key to a responsive system.</p>
            </section>

            <section className="learning-section">
                <h2>🧩 Collaboration in Learning</h2>
                <p>Studying OS concepts helps in:</p>
                <ul>
                    <li><strong>Computer Science Fundamentals:</strong> Understanding how software interacts with hardware.</li>
                    <li><strong>Problem-Solving:</strong> Debugging system-level issues.</li>
                    <li><strong>Team Projects:</strong> Learning how different OS components work together.</li>
                    <li><strong>Open-Source Contributions:</strong> Many OSs (like Linux) are community-driven.</li>
                </ul>
            </section>

            <section className="learning-section">
                <h2>📚 Real-World Applications</h2>
                <p>OS knowledge is essential for:</p>
                <ul>
                    <li><strong>Software Development:</strong> Writing efficient, hardware-aware code.</li>
                    <li><strong>Cybersecurity:</strong> Protecting systems from vulnerabilities.</li>
                    <li><strong>Cloud Computing:</strong> Managing virtual machines and containers.</li>
                    <li><strong>Embedded Systems:</strong> Powering IoT devices, cars, and medical equipment.</li>
                </ul>
            </section>

            <section className="learning-section">
                <h2>💡 Innovation and Evolution of Technology</h2>
                <p>Operating systems have evolved from simple batch processing (1950s) to modern AI-integrated systems. Key milestones:</p>
                <ul>
                    <li><strong>Multitasking OS (1960s):</strong> Allowed multiple programs to run.</li>
                    <li><strong>Graphical User Interfaces (1980s):</strong> Made computing user-friendly.</li>
                    <li><strong>Mobile & Cloud OS (2000s):</strong> Enabled smartphones and remote computing.</li>
                    <li><strong>AI & Quantum OS (Future):</strong> Next-gen systems will leverage machine learning and quantum computing.</li>
                </ul>
            </section>

            <div className="chapter-summary">
                <h3>🔹 Summary</h3>
                <p>An operating system is the backbone of computing, managing resources, ensuring security, and enabling innovation. Understanding OS principles is fundamental for anyone in tech.</p>
                <p>In the next chapter, we'll explore <strong>"History and Evolution of Operating Systems."</strong></p>
            </div>
        </div>
    )
}

export const Page2 = () => {
    return (
        <div className="chapter-content">
            <h1>Chapter 2: Four Fundamental OS Concepts</h1>

            <section className="learning-section">
                <h2>🧵 Threads</h2>
                <p><strong>Threads</strong> are the smallest units of execution within a process. Key characteristics:</p>
                <ul>
                    <li>Lightweight compared to full processes</li>
                    <li>Share memory space within their process</li>
                    <li>Enable concurrent task processing</li>
                </ul>
                <p><strong>Real-world example:</strong> Web browsers use separate threads for UI rendering, network requests, and JavaScript execution.</p>
            </section>

            <section className="learning-section">
                <h2>🗺️ Address Space</h2>
                <p>An <strong>address space</strong> provides each process with its own view of memory:</p>
                <ul>
                    <li>Code Segment - Executable instructions</li>
                    <li>Data Segment - Global variables</li>
                    <li>Heap - Dynamic memory allocation</li>
                    <li>Stack - Function calls and local variables</li>
                </ul>
                <p>Memory protection through address spaces prevents processes from interfering with each other.</p>
            </section>

            <section className="learning-section">
                <h2>⚙️ Processes</h2>
                <p>A <strong>process</strong> is an instance of a running program, containing:</p>
                <ul>
                    <li>Executable code</li>
                    <li>Allocated memory</li>
                    <li>System resources</li>
                    <li>Security attributes</li>
                </ul>
                <p><strong>Process vs Thread:</strong></p>
                <ul>
                    <li>Processes have independent memory, threads share memory</li>
                    <li>Process creation is resource-heavy compared to threads</li>
                    <li>Inter-process communication requires special mechanisms</li>
                </ul>
            </section>

            <section className="learning-section">
                <h2>🛡️ Dual Mode Execution</h2>
                <p>Modern CPUs provide two privilege levels for system protection:</p>
                <ul>
                    <li><strong>Kernel Mode:</strong> Full hardware access (used by OS)</li>
                    <li><strong>User Mode:</strong> Restricted access (used by applications)</li>
                </ul>
                <p>This separation prevents applications from crashing the system or accessing unauthorized resources.</p>
            </section>

            <div className="chapter-summary">
                <h3>🔹 Summary</h3>
                <p>The four fundamental concepts form the foundation of operating system functionality. Understanding these is crucial for system programming and optimization.</p>
                <p>Next: <strong>Process Management and Scheduling</strong></p>
            </div>
        </div>
    )
}

export const Page3 = () => {
    return (
        <div className="chapter-content">
            <h1>Chapter 3: Threads & Processes in Depth</h1>

            <section className="learning-section">
                <h2>📌 Fundamental Concepts</h2>
                <p><strong>Page Tables:</strong> Memory management system that maps virtual to physical addresses</p>
                <p><strong>System Calls:</strong> Interface between applications and OS kernel (e.g., read(), fork())</p>
            </section>

            <section className="learning-section">
                <h2>🧵 Thread Management</h2>
                <p><strong>Why threads matter:</strong></p>
                <ul>
                    <li>Enable responsive user interfaces</li>
                    <li>Efficient resource utilization</li>
                    <li>Concurrent task execution</li>
                </ul>
                <p>Multiple threads within a single process share resources but can execute different tasks.</p>
            </section>

            <section className="learning-section">
                <h2>⚡ Parallelism vs Concurrency</h2>
                <ul>
                    <li><strong>Parallelism:</strong> Actual simultaneous execution (requires multiple CPUs)</li>
                    <li><strong>Concurrency:</strong> Apparent simultaneous execution (task switching)</li>
                </ul>
                <p><strong>Multiprocessing approaches:</strong></p>
                <ul>
                    <li>Symmetric (SMP) - All CPUs equal</li>
                    <li>Asymmetric - Master-slave relationship</li>
                    <li>NUMA - Non-uniform memory access</li>
                </ul>
            </section>

            <section className="learning-section">
                <h2>⚠️ Race Conditions & Synchronization</h2>
                <p><strong>Race condition:</strong> Occurs when multiple threads access shared data unpredictably.</p>
                <pre>
                    {`if (balance >= amount) {
    balance -= amount; // Potential race condition
}`}
                </pre>
                <p><strong>Solutions:</strong></p>
                <ul>
                    <li>Mutex locks</li>
                    <li>Semaphores</li>
                    <li>Message passing</li>
                </ul>
            </section>

            <div className="chapter-summary">
                <h3>🔹 Summary</h3>
                <p>Effective thread and process management is crucial for modern computing. Proper synchronization prevents conflicts in shared resource access.</p>
                <p>Next: <strong>Memory Management Techniques</strong></p>
            </div>
        </div>
    )
}

export const Page4 = () => {
    // const navigate = useNavigate();
    // const src = "https://www.youtube.com/watch?v=pPzVV2kkGHc&list=PLF2K2xZjNEf97A_uBCwEl61sdxWVP7VWC";

    // const handleTestRedirect = () => {
    //     navigate("/test");  // Redirects to /test
    // };
    // <div style={styles.container}>
    //             <div style={styles.videoWrapper}>
    //                 <VideoPlayer src={src} />
    //             </div>
    //             <button style={styles.button} onClick={handleTestRedirect}>
    //                 Take test
    //             </button>
    //         </div>
    return (
        <>
            <div className="chapter-content">
                <h1>Chapter 4: Operating Systems Mastery Recap</h1>

                <section className="learning-section">
                    <h2>📚 Course Summary</h2>
                    <p><strong>Chapter 1 - OS Fundamentals:</strong></p>
                    <ul>
                        <li>OS acts as hardware-software intermediary</li>
                        <li>Manages resources (CPU, memory, I/O)</li>
                        <li>Provides security and abstraction</li>
                    </ul>

                    <p><strong>Chapter 2 - Core Concepts:</strong></p>
                    <ul>
                        <li>Threads vs Processes</li>
                        <li>Address space management</li>
                        <li>Dual-mode execution (User/Kernel)</li>
                    </ul>

                    <p><strong>Chapter 3 - Advanced Execution:</strong></p>
                    <ul>
                        <li>Concurrency vs Parallelism</li>
                        <li>Race conditions prevention</li>
                        <li>Synchronization methods (mutex, semaphores)</li>
                    </ul>
                </section>

                <section className="learning-section">
                    <h2>🔗 Continue Your OS Journey</h2>
                    <p>Recommended resources for deeper learning:</p>
                    <ul>
                        <li>
                            <a href="https://pages.cs.wisc.edu/~remzi/OSTEP/" target="_blank" rel="noopener noreferrer">
                                Operating Systems: Three Easy Pieces (Free Book)
                            </a>
                        </li>
                        <li>
                            <a href="https://ocw.mit.edu/courses/6-828-operating-system-engineering-fall-2012/" target="_blank" rel="noopener noreferrer">
                                MIT 6.828: Operating System Engineering
                            </a>
                        </li>
                        <li>
                            <a href="https://www.kernel.org/doc/html/latest/" target="_blank" rel="noopener noreferrer">
                                Linux Kernel Documentation
                            </a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/specializations/operating-systems" target="_blank" rel="noopener noreferrer">
                                Coursera - Operating Systems Specialization
                            </a>
                        </li>
                    </ul>
                </section>

                <section className="learning-section">
                    <h2>🧠 Key Concepts to Remember</h2>
                    <ul>
                        <li>OS manages resources efficiently and securely</li>
                        <li>Process isolation prevents system-wide failures</li>
                        <li>Proper synchronization is crucial for concurrency</li>
                        <li>Modern OSes balance performance with protection</li>
                    </ul>
                </section>

                <section className="learning-section">
                    <h2>🚀 Next Steps in OS Learning</h2>
                    <ul>
                        <li>Explore real OS code (Linux/BSD kernel)</li>
                        <li>Experiment with OS development tools (QEMU, Bochs)</li>
                        <li>Learn about virtual machine management</li>
                        <li>Study distributed operating systems</li>
                    </ul>
                </section>

                <div className="chapter-summary">
                    <h3>🔹 Course Completion</h3>
                    <p>You've now gained fundamental understanding of operating systems architecture and core concepts. Continue exploring through hands-on practice and advanced study!</p>
                    <p>Happy learning! 🎉</p>
                </div>
            </div>
            
        </>
    );
};

